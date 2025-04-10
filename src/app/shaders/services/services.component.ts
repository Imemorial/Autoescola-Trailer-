import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Splide from '@splidejs/splide';
import { Service } from '../../models/service';
import { ServicesService } from '../../services/services/services.service';

@Component({
  selector: 'app-services-shaders',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  
  @ViewChild('splide', { static: true }) splideElement!: ElementRef<HTMLDivElement>;
 
  services !: Service [];

  private splideInstance!: Splide;

  constructor (private _service :ServicesService) {}

  ngOnInit () {
    this.services = this._service.getAllServices();
  }

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