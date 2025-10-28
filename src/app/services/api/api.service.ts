import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, Page, GalleryImage } from '../../interfaces/api.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = 'https://management.itnovastudio.com/api';
  private clientUuid: string = '870586a9-44cc-443b-91ac-a790fcb358b4';
  
  // UUIDs de las páginas
  private galeriaPageUuid: string = '2865735d-9fd0-44e6-a782-aea3cf37d8dd';
  private noticiesPageUuid: string = '95a3fac4-436f-4476-961f-ecd499d566bb';

  constructor(private httpClient: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  // Obtener todas las páginas del cliente
  getPages(): Observable<Page[]> {
    return this.httpClient.get<Page[]>(`${this.apiUrl}/client/${this.clientUuid}/pages`, {
      headers: this.getHeaders()
    });
  }

  // Obtener una página específica con sus posts
  getPage(uuid: string): Observable<Page> {
    return this.httpClient.get<Page>(`${this.apiUrl}/client/${this.clientUuid}/pages/${uuid}`, {
      headers: this.getHeaders()
    });
  }

  // Obtener todos los posts del cliente
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.apiUrl}/client/${this.clientUuid}/posts`, {
      headers: this.getHeaders()
    });
  }

  // Obtener posts de una página específica
  getPostsByPage(pageUuid: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.apiUrl}/client/${this.clientUuid}/pages/${pageUuid}/posts`, {
      headers: this.getHeaders()
    });
  }

  // Obtener imágenes de la galería
  getImages(): Observable<Post[]> {
    return this.getPostsByPage(this.galeriaPageUuid);
  }

  // Obtener las noticias
  getNews(): Observable<Post[]> {
    return this.getPostsByPage(this.noticiesPageUuid);
  }
  
}
