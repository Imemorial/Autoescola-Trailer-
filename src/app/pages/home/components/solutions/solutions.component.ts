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
      title: 'Gestión de Redes Sociales',
      description:
        'Lleva tu presencia en redes sociales al siguiente nivel. Nosotros nos encargamos de que conectes con tu audiencia de manera efectiva y profesional.',
      features: [
        'Crea contenido impactante y atractivo para tus redes.',
        'Optimiza tu estrategia para alcanzar a más personas.',
        'Gestionamos tus perfiles para maximizar tu alcance.',
        'Ahorra tiempo mientras aumentas tu impacto en línea.',
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
    {
      title: 'Chatbox Inteligente para Tu Negocio',
      description:
        'Atiende a tus clientes 24/7 con un chatbox rápido y eficiente.',
      features: [
        'Responde preguntas frecuentes al instante.',
        'Funciona en web, WhatsApp y redes sociales.',
        'Personalizado con la identidad de tu marca.',
        'Soporte multilingüe y autoaprendizaje.',
      ],
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const isMobile = window.innerWidth <= 768; 
      const splide = new Splide('.splide', {
        type: 'loop',
        perPage: isMobile ? 1 : 3,
        perMove: 1,
        speed: 1000,
        arrows: false,
        pagination: false,
        autoplay: true,
        interval: 2000
      }).mount();

      const prevButton = document.querySelector('.custom-prev') as HTMLElement;
      const nextButton = document.querySelector('.custom-next') as HTMLElement;

      if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => splide.go('<'));
        nextButton.addEventListener('click', () => splide.go('>'));
      }
    }
  }
}
