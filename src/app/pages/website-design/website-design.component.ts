import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { WorkComponent } from '../../shaders/work/work.component';
import { ServicesComponent } from '../../shaders/services/services.component';
import { GoContactComponent } from '../../shaders/go-contact/go-contact.component';

@Component({
  selector: 'app-website-design',
  standalone: true,
  imports: [TopComponent, WorkComponent, ServicesComponent, GoContactComponent],
  templateUrl: './website-design.component.html',
  styleUrl: './website-design.component.scss'
})
export class WebsiteDesignComponent {

  steps = [
    {
      title: 'Contáctanos',
      description:
        'Cuéntanos tus ideas, objetivos y necesidades para tu sitio web. Nuestro equipo te asesorará y te propondrá soluciones personalizadas.',
    },
    {
      title: 'Diseño y desarrollo',
      description:
        'Creamos un diseño único y funcional basado en tus requerimientos. Luego, desarrollamos tu web asegurándonos de que sea rápida, segura y optimizada.',
    },
    {
      title: 'Entrega y soporte',
      description:
        'Te entregamos tu página web lista para usar, junto con soporte continuo para asegurarnos de que todo funcione perfectamente.',
    },
  ];
  
  text : string = 'Diseñamos tu sitio web profesional a medida, combinando diseño atractivo, funcionalidad y tecnología moderna. Hacemos que tu marca destaque y logres resultados en línea.';

  title: string = 'Diseño web a medida para tu equipo';
  description: string = 'Creamos sitios web modernos, funcionales y personalizados para potenciar tu presencia digital, adaptándonos a las necesidades de tu equipo y objetivos.';

  gridItems = [
    {
      icon: '<svg fill="#FF6600" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 399.997 399.997" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M366.684,24.971H33.316C14.945,24.971,0,39.917,0,58.288V275.56c0,18.371,14.945,33.317,33.316,33.317h107.412 l-20.387,44.955c-2.105,4.643-1.709,10.037,1.053,14.321c2.762,4.285,7.51,6.873,12.607,6.873h131.996c0.006,0,0.014,0,0.02,0 c8.285,0,15-6.715,15-15c0-2.493-0.605-4.848-1.686-6.916l-20.062-44.233h107.412c18.371,0,33.316-14.946,33.316-33.317V58.288 C400,39.917,385.055,24.971,366.684,24.971z M370,275.561c0,1.829-1.488,3.316-3.316,3.316H33.316 c-1.828,0-3.316-1.487-3.316-3.316V58.288c0-1.829,1.488-3.317,3.316-3.317h333.367c1.828,0,3.316,1.488,3.316,3.317L370,275.561 L370,275.561z"></path> <path d="M246.198,96.434c-1.057-1.056-2.921-0.9-4.166,0.344l-16.273,16.271c-1.247,1.247-1.4,3.116-0.348,4.171l23.103,23.103 c0.525,0.526,1.261,0.751,2.013,0.688c0.756-0.063,1.53-0.413,2.157-1.038l16.271-16.272c1.244-1.245,1.4-3.111,0.343-4.166 L246.198,96.434z"></path> <path d="M146.336,197.582c-0.684-0.684-1.748-0.882-2.791-0.523c-1.042,0.359-1.902,1.226-2.257,2.271l-11.118,32.934 c-0.353,1.037-0.148,2.089,0.532,2.768c0.512,0.517,1.24,0.759,2.011,0.693c0.248-0.021,0.503-0.073,0.756-0.16l32.934-11.12 c1.044-0.354,1.912-1.215,2.27-2.256c0.362-1.041,0.162-2.107-0.521-2.792L146.336,197.582z"></path> <path d="M229.504,182.228c1.451-0.662,2.51-1.965,2.859-3.519c0.35-1.555-0.047-3.185-1.071-4.405 c-1.92-2.283-3.929-4.604-5.997-6.941l18.078-18.077c0.596-0.597,0.972-1.375,1.033-2.157c0.065-0.779-0.185-1.505-0.689-2.01 l-23.104-23.101c-1.056-1.058-2.92-0.903-4.166,0.344l-17.63,17.633c-11.824-11.209-23.699-21.209-34.165-28.732 c-7.369-5.296-20.85-14.199-28.355-14.313c-1.37-0.024-2.695,0.512-3.668,1.479c-0.976,0.966-1.519,2.285-1.508,3.657 c0.039,5.114,4.528,14.341,12.639,25.977c7.72,11.075,18.326,23.802,30.426,36.563l-23,23.002 c-1.248,1.247-1.403,3.111-0.346,4.166l23.103,23.101c0.525,0.531,1.254,0.755,2.011,0.691c0.752-0.063,1.533-0.414,2.155-1.035 l23.446-23.447c2.047,1.811,4.077,3.571,6.079,5.268c0.929,0.787,2.097,1.209,3.296,1.209c0.271,0,0.543-0.022,0.815-0.065 c1.471-0.239,2.765-1.109,3.539-2.383c1.368-2.248,3.15-4.479,5.301-6.626C223.281,185.806,226.284,183.693,229.504,182.228z"></path> <path d="M242.292,186.495c-5.938,0-11.606,2.531-16.396,7.32c-5.748,5.748-8.257,11.777-7.257,17.438 c0.993,5.604,5.446,10.627,12.22,13.771c5.827,2.707,11.138,3.546,15.821,4.287c4.932,0.778,9.585,1.516,13.726,4.325 c0.857,0.585,1.859,0.882,2.864,0.882c0.706,0,1.415-0.146,2.079-0.444c1.613-0.719,2.74-2.225,2.977-3.977 c1.775-13.241-0.765-25.133-7.152-33.476C256.245,190.186,249.363,186.495,242.292,186.495z"></path> </g> </g> </g> </g></svg>',
      title: 'Diseño Personalizado',
      description: 'Creamos sitios web únicos y adaptados a la identidad de tu marca para destacar frente a tu competencia.'
    },
    {
      icon: '<svg width="64px" height="64px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_901_2601)"> <path d="M1 10V1.995C1 1.442 1.447 1 2 1H30C30.553 1 31 1.442 31 1.995V18M21 30.998L18 29.995V25H22M22 21H18M31 30C31 30.553 30.553 31 30 31H26C25.447 31 25 30.553 25 30V22C25 21.447 25.447 21 26 21H30C30.553 21 31 21.447 31 22V30ZM15 30C15 30.553 14.553 31 14 31H2C1.447 31 1 30.553 1 30V14C1 13.447 1.447 13 2 13H14C14.553 13 15 13.447 15 14V30Z" stroke="#FF6600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_901_2601"> <rect width="32" height="32" fill="white"></rect> </clipPath> </defs> </g></svg>',
      title: 'Desarrollo Responsive',
      description: 'Diseñamos y desarrollamos sitios que se adaptan a cualquier dispositivo, garantizando la mejor experiencia de usuario.'
    },
    {
      icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,4V7H3V4A1,1,0,0,1,4,3H20A1,1,0,0,1,21,4ZM3,9H21V20a1,1,0,0,1-1,1H4a.974.974,0,0,1-.46-.126l3.587-3.587,2.318,1.545a1,1,0,0,0,1.262-.125l2-2a1,1,0,0,0-1.414-1.414l-1.42,1.42L7.555,15.168a1,1,0,0,0-1.262.125L3,18.586Zm11.293,4.707a1,1,0,0,0,1.414,0l1-1a1,1,0,0,0-1.414-1.414l-1,1A1,1,0,0,0,14.293,13.707Z"></path></g></svg>',
      title: 'Optimización SEO',
      description: 'Mejoramos la visibilidad de tu sitio en motores de búsqueda para atraer más tráfico orgánico.'
    },
    {
      icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,3H3A1,1,0,0,0,2,4V20a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V4A1,1,0,0,0,21,3ZM5.293,8.707A1,1,0,1,1,6.707,7.293l.793.793.793-.793A1,1,0,1,1,9.707,8.707L8.914,9.5l.793.793a1,1,0,0,1-1.414,1.414L7.5,10.914l-.793.793a1,1,0,0,1-1.414-1.414L6.086,9.5ZM19,14a1,1,0,0,1-2,0V12.414l-.192.192A14.9,14.9,0,0,1,6.2,17H6a1,1,0,0,1,0-2h.2a12.916,12.916,0,0,0,9.193-3.808L15.586,11H14a1,1,0,0,1,0-2h4a1,1,0,0,1,1,1Z"></path></g></svg>',
      title: 'Estrategias de Conversión',
      description: 'Implementamos herramientas y técnicas para convertir visitantes en clientes potenciales de forma efectiva.'
    },
    {
      icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M15,6V1.76l-1.7,1.7A7,7,0,1,0,14.92,9H13.51a5.63,5.63,0,1,1-1.2-4.55L10.76,6Z"></path> </g> </g></svg>',
      title: 'Mantenimiento y Actualización',
      description: 'Ofrecemos soporte continuo para mantener tu sitio seguro, actualizado y funcionando a la perfección.'
    },
    {
      icon: '<svg fill="#FF6600" height="64px" width="64px" version="1.1" id="XMLID_223_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="optimization"> <g> <path d="M17,24V11h6v13H17z M19,13v9h2v-9H19z M15,24H9v-8h6V24z M11,22h2v-4h-2V22z M7,24H1v-6h6V24z M3,22h2v-2H3V22z M1,16v-2 c7.8,0,12.8-3.4,16.1-10.9l-4.3,1.7L12,2.9L19.5,0l3,7.2L20.6,8l-1.7-4.2C15.3,12.1,9.6,16,1,16z"></path> </g> </g> </g></svg>',
      title: 'Velocidad y Rendimiento',
      description: 'Optimizamos la velocidad de carga de tu sitio para mejorar la experiencia del usuario y el posicionamiento SEO.'
    }
  ];

}
