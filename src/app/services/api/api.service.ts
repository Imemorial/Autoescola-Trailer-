import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://management.itnovastudio.com/api/test/01bbfedb-5e47-4731-b788-7ae03b2a9724';

  constructor(private _httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}`);
  }
  
}
