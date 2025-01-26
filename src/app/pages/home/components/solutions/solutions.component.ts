import { Component, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgFor } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [NgFor],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements AfterViewInit {

  slides = [
    {
      title: 'Diseño Web',
      description:
        'Creando interfaces atractivas y funcionales que ofrecen una experiencia de usuario óptima.',
      features: [
        'Diseñar interfaces intuitivas y responsivas.',
        'Implementar tipografía y colores atractivos.',
        'Mejorar la navegación para una experiencia fluida.',
        'Incorporar tendencias de diseño modernas.',
      ],
    },
    {
      title: 'Software Personalizado',
      description:
        'Tienes una idea para mejorar tu negocio o tu forma de trabajar. Nosotros la hacemos realidad con un programa hecho a tu medida.',
      features: [
        'Crea herramientas únicas para tus tareas diarias.',
        'Organiza tu negocio y hazlo más eficiente.',
        'Diseñamos soluciones basadas en tus ideas.',
        'Ahorra tiempo y mejora tus resultados.',
      ],
    },
    {
      title: 'Tiendas Online (ECOMMERCE)',
      description:
        'Creemos tu tienda online para que vendas tus productos o servicios de forma fácil, rápida y profesional.',
      features: [
        'Diseñamos tu tienda online lista para vender.',
        'Fácil de usar para ti y tus clientes.',
        'Métodos de pago seguros y confiables.',
        'Gestión de inventarios y pedidos automatizada.',
      ],
    },
    {
      title: 'Servicio Técnico y Mantenimiento',
      description:
        'Mantén tus computadoras y equipos funcionando al 100% con nuestro servicio técnico confiable.',
      features: [
        'Arreglamos problemas con computadoras y laptops.',
        'Limpieza y optimización para que sean más rápidas.',
        'Instalación de programas y actualización de software.',
        'Mantenimiento preventivo para evitar fallas futuras.',
      ],
    },
    {
      title: 'Instalación de Cámaras de Seguridad',
      description:
        'Protege tu hogar o negocio con cámaras de seguridad instaladas por profesionales.',
      features: [
        'Instalación rápida y profesional en cualquier espacio.',
        'Cámaras de alta definición para vigilancia clara.',
        'Acceso remoto desde tu celular o computadora.',
        'Soluciones personalizadas para tu seguridad.',
      ],
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const splide = new Splide('.splide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        height: '400px',
        speed: 1000,
        arrows: false, 
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
