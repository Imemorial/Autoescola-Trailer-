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
      imagen: 'https://www.genesis.es/sites/genesises/files/Motos%20de%2049CC.webp',
      titulo: 'Carnet AM',
      descripcion: 'Curs per obtenir el teu carnet de conduir amb formació teòrica i pràctica.'
    },
    {
      imagen: 'https://www.motofichas.com/images/articulos/reportajes/reportaje-motos-bajas-125-main.jpg',
      titulo: 'Carnet A1',
      descripcion: 'Curs per obtenir el carnet A1, per a motos de fins a 125cc, amb formació teòrica i pràctica.'
    },
    {
      imagen: 'https://www.moto1pro.com/sites/default/files/honda_rebel_cmx500_22_0.jpg',
      titulo: 'Carnet A2',
      descripcion: 'Curs per obtenir el carnet A2, per a motos amb una potència màxima de 35 kW, amb formació teòrica i pràctica.'
    },
    {
      imagen: 'https://img.remediosdigitales.com/cd08c2/pasajero-moto-12-/1366_2000.jpg',
      titulo: 'Carnet A',
      descripcion: 'Curs per obtenir el carnet A, per a motos sense límit de potència, amb formació teòrica i pràctica.'
    },
    {
      imagen: 'https://www.autopista.es/uploads/s1/11/27/27/27/los-coches-mas-buscados-y-su-plazo-de-entrega-que-elegir-diesel-gasolina-hibrido-o-electrico.jpeg',
      titulo: 'Carnet B',
      descripcion: 'Curs per obtenir el carnet B, per a conduir vehicles de fins a 3500 kg, amb formació teòrica i pràctica.'
    },
    {
      imagen: 'https://autoescuela-barcelona.com/media/productos/prod_6/imagen/CARNET_BE_cWVqXqA.jpg',
      titulo: 'Carnet B+E',
      descripcion: 'Curs per obtenir el carnet B+E, que permet conduir vehicles amb remolc superior a 750 kg, amb formació teòrica i pràctica.'
    },
    {
      imagen: 'https://autoescuela-barcelona.com/media/productos/prod_40/imagen/carnet_camion_barcelona.jpg',
      titulo: 'Carnet C',
      descripcion: 'Curs per obtenir el carnet C, per a conduir vehicles de més de 3500 kg, amb formació teòrica i pràctica.'
    },
    {
      imagen: 'data:image/jpeg;base64,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',
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
      arrows: false, 
      gap: '1em',
      pagination: false
    }).mount();

    const prevButton = document.getElementById('slider-button-left');
    const nextButton = document.getElementById('slider-button-right');

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => splide.go('<'));
      nextButton.addEventListener('click', () => splide.go('>'));
    }
  }

}
