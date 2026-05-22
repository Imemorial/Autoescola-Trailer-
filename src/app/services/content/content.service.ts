import { Injectable } from '@angular/core';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { Observable, from, of, forkJoin } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { FirebaseService } from '../firebase/firebase.service';
import { AuthService } from '../auth/auth.service';
import { ContentItem, ContentType, UploadContentPayload } from '../../interfaces/content.interfaces';
import { Post } from '../../interfaces/api.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly collections: Record<ContentType, string> = {
    gallery: 'gallery',
    news: 'news'
  };

  constructor(
    private apiService: ApiService,
    private firebaseService: FirebaseService,
    private authService: AuthService
  ) {}

  getGalleryItems(): Observable<ContentItem[]> {
    return this.getItems('gallery', () => this.apiService.getImages());
  }

  getNewsItems(): Observable<ContentItem[]> {
    return this.getItems('news', () => this.apiService.getNews());
  }

  uploadItem(type: ContentType, payload: UploadContentPayload): Observable<ContentItem> {
    const firestore = this.firebaseService.getFirestore();
    const storage = this.firebaseService.getStorage();

    if (!firestore || !storage || !this.firebaseService.isConfigured()) {
      return of(null as unknown as ContentItem).pipe(
        map(() => {
          throw new Error('Firebase no està configurat. Revisa src/environments/environment.ts');
        })
      );
    }

    const folder = type === 'gallery' ? 'gallery' : 'news';
    const filePath = `${folder}/${Date.now()}_${payload.file.name}`;
    const storageRef = ref(storage, filePath);

    return this.authService.ensureFirebaseAuth().pipe(
      switchMap(() => from(uploadBytes(storageRef, payload.file))),
      switchMap(() => from(getDownloadURL(storageRef))),
      switchMap((imageUrl) => from(addDoc(collection(firestore, this.collections[type]), {
        title: payload.title.trim(),
        description: payload.description?.trim() || '',
        content: payload.content?.trim() || payload.description?.trim() || '',
        image_url: imageUrl,
        storage_path: filePath,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp()
      })).pipe(
        map((docRef) => ({
          id: docRef.id,
          title: payload.title.trim(),
          description: payload.description?.trim(),
          content: payload.content?.trim() || payload.description?.trim() || '',
          image_url: imageUrl,
          storage_path: filePath,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          source: 'firebase' as const
        }))
      )),
      catchError((error: { code?: string; message?: string }) => {
        if (error.code === 'storage/unauthorized') {
          throw new Error(
            'Sense permisos a Storage. Comprova les regles de Firebase Storage i torna a iniciar sessió.'
          );
        }

        throw error instanceof Error ? error : new Error(error.message || 'Error en pujar la imatge.');
      })
    );
  }

  deleteItem(type: ContentType, item: ContentItem): Observable<void> {
    const firestore = this.firebaseService.getFirestore();
    const storage = this.firebaseService.getStorage();

    if (!firestore || item.source !== 'firebase') {
      return of(undefined);
    }

    const deleteFirestore$ = from(deleteDoc(doc(firestore, this.collections[type], item.id)));
    const storagePath = item.storage_path;

    if (storage && storagePath) {
      const deleteStorage$ = from(deleteObject(ref(storage, storagePath))).pipe(catchError(() => of(undefined)));
      return forkJoin([deleteStorage$, deleteFirestore$]).pipe(map(() => undefined));
    }

    return deleteFirestore$;
  }

  private getItems(
    type: ContentType,
    apiFallback: () => Observable<Post[]>
  ): Observable<ContentItem[]> {
    return this.getFirebaseItems(type).pipe(
      switchMap((firebaseItems) => {
        if (firebaseItems.length > 0) {
          return of(firebaseItems);
        }

        return apiFallback().pipe(
          map((posts) => posts.map((post) => this.mapApiPost(post)))
        );
      }),
      catchError(() => apiFallback().pipe(
        map((posts) => posts.map((post) => this.mapApiPost(post)))
      ))
    );
  }

  private getFirebaseItems(type: ContentType): Observable<ContentItem[]> {
    const firestore = this.firebaseService.getFirestore();
    if (!firestore || !this.firebaseService.isConfigured()) {
      return of([]);
    }

    const itemsQuery = query(
      collection(firestore, this.collections[type]),
      orderBy('created_at', 'desc')
    );

    return from(getDocs(itemsQuery)).pipe(
      map((snapshot) => snapshot.docs.map((document) => {
        const data = document.data();
        return {
          id: document.id,
          title: data['title'] || '',
          description: data['description'] || '',
          content: data['content'] || data['description'] || '',
          image_url: data['image_url'] || '',
          storage_path: data['storage_path'] || '',
          created_at: this.formatTimestamp(data['created_at']),
          updated_at: this.formatTimestamp(data['updated_at']),
          source: 'firebase' as const
        };
      })),
      catchError(() => of([]))
    );
  }

  private mapApiPost(post: Post): ContentItem {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      description: post.description,
      image_url: post.image_url || '',
      created_at: post.created_at,
      updated_at: post.updated_at,
      source: 'api'
    };
  }

  private formatTimestamp(value: unknown): string {
    if (value instanceof Timestamp) {
      return value.toDate().toISOString();
    }

    if (typeof value === 'string') {
      return value;
    }

    return new Date().toISOString();
  }
}
