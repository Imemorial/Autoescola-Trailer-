import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _baseUrl: string = 'https://management.itnovastudio.com/api/test';
  private _uuid : string = '201132f7-4764-4cc7-893d-3c24739e618b';
  private _apiUrl : string = `${this._baseUrl}/${this._uuid}`;

  constructor(private _httpClient: HttpClient) { }

  getImages(): Observable<any[]> {
    // Devuelve las imágenes de la galería
    return this._httpClient.get<any[]>(`${this._apiUrl}/Galeria`);
  }

  getNews(): Observable<any[]> {
    // Devuelve las noticias
    return this._httpClient.get<any[]>(`${this._apiUrl}/Noticies`);
  }
  
}
