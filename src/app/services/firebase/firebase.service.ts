import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp, getApps } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp | null = null;
  private auth: Auth | null = null;
  private firestore: Firestore | null = null;
  private storage: FirebaseStorage | null = null;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (!this.isConfigured()) {
      return;
    }

    this.app = getApps().length ? getApps()[0] : initializeApp(environment.firebase);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
    this.storage = getStorage(this.app);
  }

  isConfigured(): boolean {
    return environment.firebase.apiKey !== 'YOUR_API_KEY'
      && environment.firebase.projectId !== 'YOUR_PROJECT_ID';
  }

  getAuth(): Auth | null {
    return this.auth;
  }

  getFirestore(): Firestore | null {
    return this.firestore;
  }

  getStorage(): FirebaseStorage | null {
    return this.storage;
  }
}
