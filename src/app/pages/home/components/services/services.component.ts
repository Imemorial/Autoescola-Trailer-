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
      image: 'https://www.genesis.es/sites/genesises/files/Motos%20de%2049CC.webp',
      title: 'Carnet AM',
      description: 'Curs per obtenir el teu carnet de conduir amb formació teòrica i pràctica.'
    },
    {
      image: 'https://www.motofichas.com/images/articulos/reportajes/reportaje-motos-bajas-125-main.jpg',
      title: 'Carnet A1',
      description: 'Curs per obtenir el carnet A1, per a motos de fins a 125cc, amb formació teòrica i pràctica.'
    },
    {
      image: 'https://www.moto1pro.com/sites/default/files/honda_rebel_cmx500_22_0.jpg',
      title: 'Carnet A2',
      description: 'Curs per obtenir el carnet A2, per a motos amb una potència màxima de 35 kW, amb formació teòrica i pràctica.'
    },
    {
      image: 'https://img.remediosdigitales.com/cd08c2/pasajero-moto-12-/1366_2000.jpg',
      title: 'Carnet A',
      description: 'Curs per obtenir el carnet A, per a motos sense límit de potència, amb formació teòrica i pràctica.'
    },
    {
      image: 'https://www.autopista.es/uploads/s1/11/27/27/27/los-coches-mas-buscados-y-su-plazo-de-entrega-que-elegir-diesel-gasolina-hibrido-o-electrico.jpeg',
      title: 'Carnet B',
      description: 'Curs per obtenir el carnet B, per a conduir vehicles de fins a 3500 kg, amb formació teòrica i pràctica.'
    },
    {
      image: 'https://autoescuela-barcelona.com/media/productos/prod_6/imagen/CARNET_BE_cWVqXqA.jpg',
      title: 'Carnet B+E',
      description: 'Curs per obtenir el carnet B+E, que permet conduir vehicles amb remolc superior a 750 kg, amb formació teòrica i pràctica.'
    },
    {
      image: 'https://autoescuela-barcelona.com/media/productos/prod_40/imagen/carnet_camion_barcelona.jpg',
      title: 'Carnet C',
      description: 'Curs per obtenir el carnet C, per a conduir vehicles de més de 3500 kg, amb formació teòrica i pràctica.'
    },
    {
      image: '',
      title: 'Carnet C+E',
      description: 'Curs per obtenir el carnet C+E, que permet conduir vehicles pesats amb remolc, amb formació teòrica i pràctica.'
    }
];
  
  constructor() {}
  ngAfterViewInit(): void {
    const splide = new Splide('.splide', {
      type: 'loop',
      perPage: 3,          // Número de elementos por página en pantallas grandes
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
