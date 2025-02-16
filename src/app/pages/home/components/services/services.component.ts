import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  services: any[] = [
    {
      image: '/assets/icons/am.png',
      title: 'Carnet AM',
    },
    {
      image: '/assets/icons/a1.png',
      title: 'Carnet A1',
    },
    {
      image: '/assets/icons/a2.png',
      title: 'Carnet A2',
    },
    {
      image: '/assets/icons/a.png',
      title: 'Carnet A',
    },
    {
      image: '/assets/icons/car.png',
      title: 'Carnet B',
    },
    {
      image: '/assets/icons/be.png',
      title: 'Carnet B+E',
    },
    {
      image: '/assets/icons/c.png',
      title: 'Carnet C',
    },
    {
      image: '/assets/icons/ce.png',
      title: 'Carnet C+E',
    },
  
];
  
  constructor() {}
  ngAfterViewInit(): void {
    const splide = new Splide('.splide', {
      type: 'loop',
      perPage: 4,         
      perMove: 1,
      autoplay: true,
      arrows: false,
      gap: '1em',
      pagination: false,
      breakpoints: {
        768: {           
          perPage: 1,      
        },
      },
    }).mount();
  
    const prevButton = document.getElementById('slider-button-left');
    const nextButton = document.getElementById('slider-button-right');
  
    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => splide.go('<'));
      nextButton.addEventListener('click', () => splide.go('>'));
    }
  }

}
