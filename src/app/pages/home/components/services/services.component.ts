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
      imagen: 'ruta/a/imagen1.jpg',
      titulo: 'Carnet AM',
      descripcion: 'Curs per obtenir el teu carnet de conduir amb formació teòrica i pràctica.'
    },
    {
      imagen: 'ruta/a/imagen2.jpg',
      titulo: 'Carnet A1',
      descripcion: 'Curs per obtenir el carnet A1, per a motos de fins a 125cc, amb formació teòrica i pràctica.'
    },
    {
      imagen: 'ruta/a/imagen3.jpg',
      titulo: 'Carnet A2',
      descripcion: 'Curs per obtenir el carnet A2, per a motos amb una potència màxima de 35 kW, amb formació teòrica i pràctica.'
    },
    {
      imagen: 'ruta/a/imagen4.jpg',
      titulo: 'Carnet A',
      descripcion: 'Curs per obtenir el carnet A, per a motos sense límit de potència, amb formació teòrica i pràctica.'
    },
    {
      imagen: 'ruta/a/imagen5.jpg',
      titulo: 'Carnet B',
      descripcion: 'Curs per obtenir el carnet B, per a conduir vehicles de fins a 3500 kg, amb formació teòrica i pràctica.'
    },
    {
      imagen: 'ruta/a/imagen6.jpg',
      titulo: 'Carnet B+E',
      descripcion: 'Curs per obtenir el carnet B+E, que permet conduir vehicles amb remolc superior a 750 kg, amb formació teòrica i pràctica.'
    },
    {
      imagen: 'ruta/a/imagen7.jpg',
      titulo: 'Carnet C',
      descripcion: 'Curs per obtenir el carnet C, per a conduir vehicles de més de 3500 kg, amb formació teòrica i pràctica.'
    },
    {
      imagen: 'ruta/a/imagen8.jpg',
      titulo: 'Carnet C+E',
      descripcion: 'Curs per obtenir el carnet C+E, que permet conduir vehicles pesats amb remolc, amb formació teòrica i pràctica.'
    }
  ];
  

  constructor() {}

  ngAfterViewInit(): void {
    const splide = new Splide('.splide', {
      type: 'loop',
      perPage: 2,
      perMove: 1,
      autoplay: true,
      direction: 'rtl',
      arrows: false, 
      gap: '1em',
      pagination: false
    }).mount();

    const prevButton = document.getElementById('slider-button-left');
    const nextButton = document.getElementById('slider-button-right');

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => splide.go('>'));
      nextButton.addEventListener('click', () => splide.go('<'));
    }
  }

}
