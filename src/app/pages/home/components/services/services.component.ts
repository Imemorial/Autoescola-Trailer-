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

  servicios: any[] = [
    {
      imagen: 'ruta/a/imagen1.jpg', 
      titulo: 'Curso Básico de Conducción',
      descripcion: 'Curso para obtener tu carnet de conducir con formación teórica y práctica.'
    },
    {
      imagen: 'ruta/a/imagen2.jpg',
      titulo: 'Curso Avanzado de Conducción',
      descripcion: 'Curso avanzado para conductores que buscan mejorar sus habilidades.'
    },
    {
      imagen: 'ruta/a/imagen3.jpg',
      titulo: 'Curso de Conducción para Extranjeros',
      descripcion: 'Cursos adaptados a extranjeros que desean obtener su carnet de conducir.'
    }
  ];

  constructor() {}

  ngAfterViewInit(): void {
    new Splide('.splide', {
      type: 'loop',
      perPage: 2,
      autoplay: true,
      direction: 'rtl',
      arrows: false,
      gap: '1em'
    }).mount();
  }

}
