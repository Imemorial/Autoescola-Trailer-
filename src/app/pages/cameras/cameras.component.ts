import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { WorkComponent } from '../../shaders/work/work.component';
import { GoContactComponent } from '../../shaders/go-contact/go-contact.component';
import { FaqsComponent } from '../../shaders/faqs/faqs.component';
import { ServicesComponent } from '../../shaders/services/services.component';

@Component({
  selector: 'app-cameras',
  standalone: true,
  imports: [TopComponent, WorkComponent, GoContactComponent, FaqsComponent, ServicesComponent],
  templateUrl: './cameras.component.html',
  styleUrl: './cameras.component.scss'
})
export class CamerasComponent {

  steps = [
    {
      title: 'Comparte tu necesidad',
      description:
        'Cuéntanos sobre tu espacio y tus necesidades de seguridad. Juntos definiremos la mejor estrategia y los puntos clave para instalar tu circuito de cámaras de seguridad.',
    },
    {
      title: 'Instalación personalizada',
      description:
        'Nos encargamos de la instalación del sistema de cámaras, adaptándolo a las características de tu espacio y asegurando una configuración óptima.',
    },
    {
      title: 'Puesta en marcha y soporte',
      description:
        'Activamos el sistema y te brindamos soporte continuo, garantizando que tus cámaras funcionen de manera eficiente y protejan tu entorno.',
    },
  ];

  text: string = '¿Necesitas mejorar la seguridad de tu hogar o negocio? Diseñamos e instalamos circuitos de cámaras de seguridad a tu medida.';

  title: string = 'Seguridad hecha para ti';
  description: string = 'Instalamos sistemas de cámaras de seguridad personalizados para proteger lo que más importa, adaptados a tus necesidades específicas.';
  

  gridItems = [
    {
      icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path></g></svg>',
      title: 'Análisis de Necesidades',
      description: 'Evaluamos tu espacio y definimos la mejor estrategia para instalar tu sistema de cámaras de seguridad.',
    },
    {
      icon: '<svg fill="#FF6600" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 472.047 472.047" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M452.842,431.982l-10.925-32.184c-19.086-56.186-68.4-95.763-126.107-103.326c-21.408,23.559-49.274,37.939-79.797,37.939 c-30.516,0-58.375-14.38-79.783-37.939c-57.7,7.563-107.014,47.14-126.1,103.326l-10.925,32.184 c-3.145,9.255-1.638,19.458,4.061,27.409c5.692,7.945,14.869,12.656,24.645,12.656h376.224c9.777,0,18.954-4.712,24.645-12.656 C454.48,451.44,455.987,441.237,452.842,431.982z"></path> <path d="M236.013,310.558c53.266,0,96.507-56.559,97.967-127.023H138.068C139.528,253.999,182.769,310.558,236.013,310.558z"></path> <path d="M116.133,152.296c3.184,1.57,6.709,2.532,10.498,2.532h217.396h1.398c3.781,0,7.315-0.962,10.491-2.532 c7.889-3.882,13.363-11.927,13.363-21.322c0-13.176-10.677-23.853-23.853-23.853h-1.878h-2.501 c-0.682-3.456-1.49-6.871-2.352-10.273c-6.507-25.631-18.256-49.476-34.778-67.32v17.324c0,8.781-7.121,15.902-15.902,15.902 c-8.783,0-15.902-7.121-15.902-15.902V6.079C265.782,3.238,259.004,1.272,251.921,0v64.191c0,8.781-7.119,15.902-15.902,15.902 c-8.781,0-15.902-7.121-15.902-15.902V0c-7.081,1.272-13.852,3.238-20.18,6.071v40.781c0,8.781-7.121,15.902-15.902,15.902 c-8.781,0-15.902-7.121-15.902-15.902V29.529c-16.516,17.836-28.257,41.665-34.762,67.282c-0.87,3.416-1.678,6.84-2.361,10.311 h-2.508h-1.871c-13.177,0-23.853,10.677-23.853,23.853C102.777,140.362,108.251,148.407,116.133,152.296z"></path> </g> </g></svg>',
      title: 'Instalación Profesional',
      description: 'Realizamos la instalación y configuración de las cámaras, asegurando cobertura total y calidad óptima.',
    },
    {
      icon: '<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z" fill="#FF6600"></path> </g></svg>',
      title: 'Monitoreo y Mantenimiento',
      description: 'Te ofrecemos soluciones de monitoreo y soporte técnico para que tu sistema funcione siempre de manera eficiente.',
    },
    {
      icon: '<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10Z" fill="#FF6600"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6Z" fill="#FF6600"></path> <path d="M7.26067 17.6525L6.70006 18.4C5.5876 19.8833 6.64595 22 8.50006 22H15.5001C17.3542 22 18.4125 19.8833 17.3001 18.4L16.7394 17.6525C15.363 18.5067 13.7391 19 12 19C10.2609 19 8.63706 18.5067 7.26067 17.6525Z" fill="#FF6600"></path> </g></svg>',
      title: 'Soluciones Personalizadas',
      description: 'Adaptamos el sistema de cámaras a las necesidades específicas de tu hogar o negocio.',
    },
  ];

  goContactTitle: string = 'Descubre Más Opciones';
  goContactSecondTitle: string = '¿Necesitas mejorar la seguridad de tu hogar o negocio con una solución personalizada?';
  goContactParagraph: string = 'Estamos aquí para ayudarte. Contáctanos, cuéntanos tus necesidades de seguridad, y juntos diseñaremos el sistema de cámaras ideal para ti de manera eficiente y profesional.';

  faqs = [
    {
      question: '¿Qué tipo de sistemas de cámaras instaláis?',
      answer:
        'Instalamos sistemas de cámaras de seguridad para hogares y negocios, incluyendo cámaras IP, analógicas y con visión nocturna.',
      open: true
    },
    {
      question: '¿Puedo elegir dónde instalar las cámaras?',
      answer:
        '¡Claro que sí! Trabajamos contigo para definir los puntos estratégicos de instalación según tus necesidades y el diseño del espacio.',
      open: false
    },
    {
      question: '¿Cuánto tiempo lleva instalar un sistema de cámaras?',
      answer:
        'El tiempo depende del tamaño y la complejidad del proyecto, pero generalmente completamos instalaciones en 1 a 3 días.',
      open: false
    },
    {
      question: '¿Ofrecéis soporte después de la instalación?',
      answer:
        'Sí, ofrecemos soporte técnico para asegurarnos de que el sistema funcione correctamente, además de opciones de mantenimiento continuo.',
      open: false
    },
    {
      question: '¿Podéis integrar las cámaras con sistemas ya existentes?',
      answer:
        'Sí, podemos integrar las cámaras con tus sistemas actuales, como alarmas, aplicaciones móviles o plataformas de monitoreo.',
      open: false
    },
    {
      question: '¿Las cámaras son accesibles desde dispositivos móviles?',
      answer:
        'Sí, configuramos las cámaras para que puedas acceder a ellas desde tu smartphone, tablet o computadora en tiempo real.',
      open: false
    },
    {
      question: '¿Qué garantías ofrecéis sobre los sistemas instalados?',
      answer:
        'Ofrecemos garantías sobre la instalación y los equipos, asegurándonos de que estén en perfecto funcionamiento.',
      open: false
    },
    {
      question: '¿Podéis trabajar con espacios grandes o pequeños?',
      answer:
        'Sí, adaptamos nuestras soluciones tanto para pequeños espacios como para instalaciones en áreas grandes o complejas.',
      open: false
    },
    {
      question: '¿Cómo se manejan los pagos por la instalación?',
      answer:
        'Dividimos los pagos en fases, como un adelanto inicial, pagos intermedios según el progreso, y un pago final al completar la instalación.',
      open: false
    }
  ];
  

}
