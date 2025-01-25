import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const splide = new Splide('.splide2', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        height: '400px',
        speed: 1000,
        arrows: false, 
        pagination: false,
      }).mount();
  
      const prevButton = document.querySelector('.custom-prev') as HTMLElement;
      const nextButton = document.querySelector('.custom-next') as HTMLElement;
  
      prevButton.addEventListener('click', () => splide.go('<'));
      nextButton.addEventListener('click', () => splide.go('>'));
    }
  }

}
