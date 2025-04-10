import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-services-shaders',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  
  @ViewChild('splide', { static: true }) splideElement!: ElementRef<HTMLDivElement>;

  services: any[] = [
    { image: '/assets/icons/am.png', title: 'Permis AM' },
    { image: '/assets/icons/a1.png', title: 'Permis A1' },
    { image: '/assets/icons/a2.png', title: 'Permis A2' },
    { image: '/assets/icons/a.png', title: 'Permis A' },
    { image: '/assets/icons/car.png', title: 'Permis B' },
    { image: '/assets/icons/be.png', title: 'Permis B+E' },
    { image: '/assets/icons/c.png', title: 'Permis C' },
    { image: '/assets/icons/ce.png', title: 'Permis C+E' },
    { image: '/assets/icons/cap.png', title: 'Permís CAP' },
    { image: '/assets/icons/adr.png', title: 'Permís ADR' },
    { image: '/assets/icons/tractor.png', title: 'LVA' },
  ];

  private splideInstance!: Splide;

  ngAfterViewInit(): void {
    this.splideInstance = new Splide(this.splideElement.nativeElement, {
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

    const prevButton = document.getElementById('slider-button-left');
    const nextButton = document.getElementById('slider-button-right');

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => this.splideInstance.go('<'));
      nextButton.addEventListener('click', () => this.splideInstance.go('>'));
    }
  }

  ngOnDestroy(): void {
    if (this.splideInstance) {
      this.splideInstance.destroy();
    }
  }

} 