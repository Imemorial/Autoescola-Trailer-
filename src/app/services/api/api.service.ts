import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _baseUrl: string = 'https://management.itnovastudio.com/api/test';
  private _uuid : string = '6387346c-573c-4e63-9a04-f04a262ff525'
  private _apiUrl : string = `${this._baseUrl}/${this._uuid}`;

  constructor(private _httpClient: HttpClient) { }

  getImages(): Observable<any> {
    return this._httpClient.get(`${this._apiUrl}/Galeria`);
  }

  getNews(): Observable<any> {
    return this._httpClient.get(`${this._apiUrl}/Noticies`);
  }
  
}
