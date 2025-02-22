import { Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  constructor() { }

  ngOnInit(): void {
    new Splide('#testimonial-slider', {
      type       : 'loop',
      perPage    : 3,
      focus      : 'center',
      pagination: false,
      arrows     : true,
      prevArrow  : '#slider-button-left',
      nextArrow  : '#slider-button-right',
      gap: '1em'
    }).mount();
  }

}
