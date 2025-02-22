import { Component, ElementRef, ViewChild } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  @ViewChild('splide', { static: true }) splideElement!: ElementRef<HTMLDivElement>;

  private splideInstance!: Splide;

  constructor() { }

  ngOnInit(): void {
    this.splideInstance = new Splide('#testimonial-slider', {
      type       : 'loop',
      perPage    : 3,
      focus      : 'center',
      pagination: false,
      arrows     : false,
      prevArrow  : '#slider-button-left',
      nextArrow  : '#slider-button-right',
      gap: '1em'
    }).mount();

    const prevButton = document.getElementById('slider-button-left-testimonial');
    const nextButton = document.getElementById('slider-button-right-testimonial');

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => this.splideInstance.go('<'));
      nextButton.addEventListener('click', () => this.splideInstance.go('>'));
    }
  }

}
