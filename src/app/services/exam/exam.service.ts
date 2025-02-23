import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from '../../models/exam';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private _httpClient : HttpClient) { }

  readQuestions(): Observable<Exam> {
    return this._httpClient.get<Exam>('/assets/tests/tests.json'); 
  }

}
