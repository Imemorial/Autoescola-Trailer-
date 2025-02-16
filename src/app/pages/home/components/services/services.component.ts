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

  others: any[] = [
    {
      image: '/assets/icons/cap.png',
      title: 'Permís CAP',
    },
    {
      image: '/assets/icons/adr.png',
      title: 'Permís ADR',
    },
    {
      image: '/assets/icons/tractor.png',
      title: 'LVA',
    },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    const splide1 = new Splide('.splide', {
      type: 'loop',
      perPage: 4,
      perMove: 1,
      autoplay: true,
      arrows: false,
      gap: '1em',
      pagination: false,
      interval: 2000,
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    }).mount();

    const prevButton1 = document.getElementById('slider-button-left');
    const nextButton1 = document.getElementById('slider-button-right');

    if (prevButton1 && nextButton1) {
      prevButton1.addEventListener('click', () => splide1.go('<'));
      nextButton1.addEventListener('click', () => splide1.go('>'));
    }

    const splide2 = new Splide('.splide2', {
      type: 'loop',
      perPage: 2,
      perMove: 1,
      autoplay: true,
      arrows: false,
      gap: '1em',
      pagination: false,
      interval: 3000,
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    }).mount();

    const prevButton2 = document.getElementById('slider-button-left2');
    const nextButton2 = document.getElementById('slider-button-right2');

    if (prevButton2 && nextButton2) {
      prevButton2.addEventListener('click', () => splide2.go('<'));
      nextButton2.addEventListener('click', () => splide2.go('>'));
    }
  }
}
