import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _baseUrl: string = 'http://127.0.0.1:8000/api/test';
  private _uuid : string = '420da3d2-3697-4903-af75-e2f3b164cf75'
  private _apiUrl : string = `${this._baseUrl}/${this._uuid}`;

  constructor(private _httpClient: HttpClient) { }

  getImages(): Observable<any> {
    return this._httpClient.get(`${this._apiUrl}/Galeria`);
  }

  getNews(): Observable<any> {
    return this._httpClient.get(`${this._apiUrl}/Noticies`);
  }
  
}
