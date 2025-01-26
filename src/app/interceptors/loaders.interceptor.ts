import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { LoadingService } from '../services/loading/loading.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const loadersInterceptor: HttpInterceptorFn = (req, next) => {

  const loadingService = inject(LoadingService);

  loadingService.showLoader();

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          setTimeout(() => {
            console.log("ocultar")
            loadingService.hideLoader();
          }, 250);
        }
      },
      error: () => {
        setTimeout(() => {
          loadingService.hideLoader();
        }, 250);
      }
    })
  );
  
};
