import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.loadingSubject.asObservable();

  constructor() {}

  public showLoader() {
    this.loadingSubject.next(true);
  }

  public hideLoader() {
    this.loadingSubject.next(false);
  }
  
}
