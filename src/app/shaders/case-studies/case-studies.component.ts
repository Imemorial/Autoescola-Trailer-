import { isPlatformBrowser, NgFor } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent {

    cases = [
    {
      title: 'El Mirall Escola de Ball',
      category: 'Software',
      description: 'Creamos un sitio web moderno y funcional para "El Mirall Escola de Ball", una academia de baile ubicada en Lleida. La plataforma está diseñada para reflejar la pasión por el baile y permite a los usuarios consultar horarios, inscribirse en clases y conocer más sobre la academia.',
      image: '/assets/images/elmirall.png',
      alt: 'El Mirall Escola de Ball'
    },
    {
      title: 'Gloder Bellpuig',
      category: 'Software',
      description: 'Desarrollamos un sitio web atractivo y fácil de usar para Gloder Bellpuig, un restaurante destacado en Bellpuig. La página incluye funcionalidades como menús digitales, reservas en línea y una sección para descubrir la historia del restaurante.',
      image: '/assets/images/gloder.png',
      alt: 'Gloder Bellpuig'
    },
    {
      title: 'Asere Academia de Ball Bellpuig',
      category: 'Software',
      description: 'Diseñamos y desarrollamos un sitio web intuitivo para "Asere Academia de Ball", una academia de baile ubicada en Bellpuig. El proyecto se centra en proporcionar información clara sobre las clases, eventos y actividades especiales, creando una experiencia fluida para estudiantes y visitantes.',
      image: '/assets/images/asere.png',
      alt: 'Asere Academia de Ball Bellpuig'
    },
    {
      title: 'Gastrobacus',
      category: 'Software',
      description: 'Implementamos una solución completa de web app para Gastrobacus, una asociación de Lleida enfocada en la gestión eficiente de sus finanzas. La aplicación facilita el control de gastos, el análisis presupuestario y la colaboración entre los miembros de la asociación.',
      image: '/assets/images/gastrobacus.png',
      alt: 'Gastrobacus'
    },
    {
      title: 'Eselmind',
      category: 'Software',
      description: 'Desarrollamos una plataforma innovadora para Eselmind, una academia de finanzas que busca empoderar a sus estudiantes con conocimientos prácticos. El sitio web incluye recursos educativos, programas personalizados y herramientas para el aprendizaje interactivo.',
      image: '/assets/images/eselmind.png',
      alt: 'Eselmind'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const splide = new Splide('.case-studies-slider', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        speed: 1000,
        arrows: false, 
        gap: '1rem',
        pagination: false,
        autoplay: true,
        interval: 3000
      }).mount();
  
      const prevButton = document.querySelector('.custom-prev') as HTMLElement;
      const nextButton = document.querySelector('.custom-next') as HTMLElement;
  
      prevButton.addEventListener('click', () => splide.go('<'));
      nextButton.addEventListener('click', () => splide.go('>'));
    }
  }

}
