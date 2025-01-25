import { Component, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
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
