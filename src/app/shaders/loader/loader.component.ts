import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoaderComponent {

  isLoading$: Observable<boolean>;

  constructor(private loadingService: LoadingService,
    private _router : Router
  ) {
    this.isLoading$ = this.loadingService.isLoading$;
  }

  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.showLoader();
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        setTimeout(() => {
          this.loadingService.hideLoader();
        }, 800); 
      }
    });
  }

}
