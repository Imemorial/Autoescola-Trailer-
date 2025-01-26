import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { WorkComponent } from '../../shaders/work/work.component';
import { GoContactComponent } from '../../shaders/go-contact/go-contact.component';
import { FaqsComponent } from '../../shaders/faqs/faqs.component';
import { ServicesComponent } from '../../shaders/services/services.component';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [TopComponent, WorkComponent, GoContactComponent, FaqsComponent, ServicesComponent],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {

  steps = [
    {
      title: 'Comparte tu visión',
      description:
        'Cuéntanos sobre tu negocio o proyecto. Juntos definiremos el enfoque, los objetivos y las estrategias clave para gestionar tus redes sociales de manera efectiva.',
    },
    {
      title: 'Estrategia y creación de contenido',
      description:
        'Diseñamos un plan estratégico y creamos contenido atractivo y relevante para conectar con tu audiencia y fortalecer tu presencia en redes.',
    },
    {
      title: 'Gestión y análisis continuo',
      description:
        'Publicamos, monitoreamos y analizamos el desempeño de tus redes sociales, realizando ajustes constantes para maximizar resultados.',
    },
  ];

  text: string = '¿Quieres potenciar tus redes sociales? Desde estrategias creativas hasta gestión integral, hacemos que tu marca destaque en el mundo digital.';

title: string = 'Gestión de redes hecha para ti';
description: string = 'Creamos estrategias y contenido atractivos para tus redes sociales, diseñados para conectar con tu audiencia y hacer crecer tu negocio.';
  

gridItems = [
  {
    icon: '<svg height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 455.683 455.683" xml:space="preserve" fill="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style="fill:#FF6600;" d="M383.183,143.241c0-0.129,0.043-0.949,0.043-0.949c-0.022-67.215-54.704-121.896-121.94-121.896 c-46.658,0-87.362,27.309-107.789,68.164c-10.462-8.111-22.434-13.978-35.98-13.978c-33.176,0-60.182,26.985-60.182,60.161 c0,0,0.41,2.934,0.733,5.199C24.159,151.481,0,182.5,0,219.17c0,22.649,8.844,44.004,24.85,60.01 c16.027,16.027,37.361,24.871,60.01,24.871h289.501c44.846,0,81.322-36.455,81.322-81.279 C455.704,181.054,423.693,147.814,383.183,143.241z M374.383,280.064H84.859c-16.243,0-31.536-6.363-43.055-17.861 c-11.476-11.497-17.817-26.791-17.817-43.055c0-29.185,20.773-54.315,49.332-59.794l11.174-2.135l-1.855-12.856l-1.316-9.621 c0-19.975,16.221-36.174,36.196-36.174c11.821,0,22.951,5.781,29.746,15.531l13.59,19.565l7.571-22.563 c13.46-39.906,50.756-66.697,92.819-66.697c54.035,0,97.974,43.918,97.974,97.91l-1.208,22.973l13.525,0.237l2.826-0.086 c31.623,0,57.357,25.712,57.357,57.335C431.718,254.33,406.005,280.064,374.383,280.064z M378.006,392.297v42.991h-84.277v-42.991 c0-8.758,7.161-15.876,15.811-15.876h52.654C370.866,376.421,377.985,383.539,378.006,392.297z M200.824,344.82 c0-16.005,12.986-28.991,28.991-28.991s28.97,12.986,28.97,28.991c0,16.006-12.986,28.991-28.97,28.991 C213.81,373.811,200.824,360.847,200.824,344.82z M306.888,344.82c0-16.005,12.986-28.991,28.991-28.991 c16.006,0,28.991,12.986,28.991,28.991c0,16.006-12.986,28.991-28.991,28.991S306.888,360.847,306.888,344.82z M94.804,344.82 c0-16.005,12.986-28.991,28.991-28.991s28.991,12.986,28.991,28.991c0,16.006-12.986,28.991-28.991,28.991 S94.804,360.847,94.804,344.82z M271.964,392.297v42.991h-84.234v-42.991c0-8.758,7.097-15.876,15.833-15.876h52.568 C264.868,376.421,271.943,383.539,271.964,392.297z M165.944,392.297v42.991H81.667v-42.991c0-8.758,7.162-15.876,15.811-15.876 h52.654C158.783,376.421,165.944,383.539,165.944,392.297z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>',
    title: 'Estrategia de Redes Sociales',
    description: 'Creamos estrategias personalizadas para aumentar tu presencia y conectar con tu audiencia en redes sociales.',
  },
  {
    icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>design-solid</title> <path class="clr-i-solid clr-i-solid-path-1" d="M34.87,32.21,30,27.37V8.75L27.7,4.52a2,2,0,0,0-3.54,0L22,8.76V19.41L3.71,1.21A1,1,0,0,0,2,1.92V10H4.17v1.6H2V18H4.17v1.6H2v6.65H4.17v1.6H2v5.07a1,1,0,0,0,1,1H34.16a1,1,0,0,0,.71-1.71ZM10,26V16.94L19.07,26Zm18,2.11H24V25.68h4Zm0-4H24V9.25l1.94-3.77L28,9.26Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>', 
    title: 'Creación de Contenido',
    description: 'Diseñamos y producimos contenido atractivo y relevante para tus plataformas digitales.',
  },
  {
    icon: '<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#FF6600" d="M60,10H49.656l-6.828-6.828C42.078,2.422,41.062,2,40,2H24c-1.062,0-2.078,0.422-2.828,1.172L14.344,10H4 c-2.211,0-4,1.789-4,4v44c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V14C64,11.789,62.211,10,60,10z M32,50 c-8.836,0-16-7.164-16-16s7.164-16,16-16s16,7.164,16,16S40.836,50,32,50z"></path> <circle fill="#FF6600" cx="32" cy="34" r="8"></circle> </g> </g></svg>', 
    title: 'Gestión de Publicaciones',
    description: 'Programamos y gestionamos publicaciones para mantener tu perfil activo y optimizado.',
  },
  {
    icon: '<svg width="64px" height="64px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 1H0V13H5L8 16L11 13H16V1ZM3 6H5V8H3V6ZM9 6H7V8H9V6ZM13 6H11V8H13V6Z" fill="#FF6600"></path> </g></svg>', 
    title: 'Atención al Cliente en Redes',
    description: 'Respondemos consultas y gestionamos interacciones con tu audiencia para fortalecer la relación con tus clientes.',
  },
  {
    icon: '<svg width="64px" height="64px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>click [#FF6600]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -4599.000000)" fill="#FF6600"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M14,4447 C12.895,4447 12,4448 12,4449 C12,4449.231 12.058,4449.461 12.153,4449.68 L4.362,4452.545 L6.684,4454.868 L4,4457.552 L5.448,4459 L8.132,4456.316 L10.455,4458.638 L13.32,4450.847 C13.539,4450.942 13.769,4451 14,4451 C15.105,4451 16,4450 16,4449 C16,4447.895 15.105,4447 14,4447 M14,4443 L14,4445 C16.206,4445 18,4446.794 18,4449 L20,4449 C20,4445.686 17.314,4443 14,4443 M24,4449 L22,4449 C22,4444.589 18.411,4441 14,4441 L14,4439 C19.523,4439 24,4443.477 24,4449" id="click-[#FF6600]"> </path> </g> </g> </g> </g></svg>',
    title: 'Publicidad en Redes Sociales',
    description: 'Creamos campañas de anuncios para aumentar la visibilidad y alcanzar tus objetivos de negocio.',
  },
  {
    icon: '<svg width="64px" height="64px" viewBox="0 -0.5 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile_image_favorite_round [#1330]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -2199.000000)" fill="#FF6600"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M185.499538,2059.38057 C183.354926,2061.33708 182.971959,2061.75784 180.327475,2059.31345 C176.808214,2056.06162 180.624778,2052.53629 182.793578,2055.2722 C182.872186,2055.37138 183.028396,2055.36937 183.107005,2055.27019 C185.242548,2052.55833 189.157876,2056.04659 185.499538,2059.38057 M174.70593,2048.95086 C174.115355,2048.90277 173.941004,2048.91078 173.440124,2048.94785 C172.078578,2048.65633 171.054646,2047.45217 171.054646,2046.01258 C171.054646,2044.35561 172.411154,2043.00719 174.078066,2043.00719 C175.744978,2043.00719 177.101486,2044.35561 177.101486,2046.01258 C177.101486,2047.45517 176.072515,2048.66234 174.70593,2048.95086 M166.027707,2056.08967 C166.025691,2056.06863 166.015613,2056.0516 166.015613,2056.03056 L166.015613,2042.00539 C166.015613,2041.4524 166.466103,2041.0036 167.02342,2041.0036 L174.013566,2041.0036 C171.261247,2041.03866 169.039033,2043.26565 169.039033,2046.00958 C169.039033,2047.45718 169.665889,2048.7525 170.652531,2049.66614 C168.138054,2050.82722 166.324002,2053.22953 166.027707,2056.08967 M178.709945,2050.37641 C178.324963,2050.10493 177.913778,2049.8645 177.479413,2049.66113 C178.479157,2048.74649 179.117099,2047.45818 179.117099,2045.99956 C179.117099,2043.25564 176.894885,2041.03866 174.142566,2041.0036 L181.132712,2041.0036 C181.689021,2041.0036 182.140519,2041.4524 182.140519,2042.00539 L182.140519,2051.11173 C182.140519,2051.61564 182.550696,2052.02337 183.057623,2052.02337 C183.82154,2052.02337 184.156132,2051.61764 184.156132,2051.11173 L184.156132,2041.0036 C184.156132,2039.89761 183.253137,2039 182.140519,2039 L166.015613,2039 C164.901987,2039 164,2039.89761 164,2041.0036 L164,2057.03236 C164,2058.13934 164.901987,2059.03595 166.015613,2059.03595 L176.184382,2059.03595 C176.690301,2059.03595 177.101486,2058.62822 177.101486,2058.12432 C177.101486,2057.36495 176.692316,2057.03236 176.184382,2057.03236 L168.006031,2057.03236 C168.005023,2057.03236 167.998977,2056.96624 167.998977,2056.92617 C167.998977,2050.8162 175.443644,2050.00875 177.313125,2051.73585 C178.320932,2052.66652 179.844735,2051.17685 178.709945,2050.37641" id="profile_image_favorite_round-[#1330]"> </path> </g> </g> </g> </g></svg>',
    title: 'Optimización de Perfiles',
    description: 'Mejoramos y adaptamos tus perfiles para transmitir profesionalismo y captar la atención de tu público.',
  },
];


goContactTitle: string = 'Explora Más Soluciones';
goContactSecondTitle: string = '¿Tienes una idea para un software o necesitas una solución digital personalizada?';
goContactParagraph: string = 'Estamos aquí para hacerlo realidad. Contáctanos, cuéntanos tu idea y juntos desarrollaremos el software que necesitas de manera rápida y eficiente.';


  faqs = [
    {
      question: '¿Qué tipo de software desarrolláis?',
      answer:
        'Desarrollamos todo tipo de software personalizado, desde aplicaciones móviles y sistemas web hasta herramientas específicas para gestión de negocios.',
      open: true
    },
    {
      question: '¿Puedo pedir funciones específicas para mi software?',
      answer:
        '¡Por supuesto! Trabajamos contigo para definir las funcionalidades que necesitas, adaptándonos completamente a tus requisitos.',
      open: false
    },
    {
      question: '¿Cuánto tiempo tardáis en desarrollar un software?',
      answer:
        'El tiempo depende de la complejidad del proyecto. Generalmente, los plazos van desde unas semanas para proyectos pequeños hasta varios meses para soluciones más complejas.',
      open: false
    },
    {
      question: '¿Ofrecéis soporte después de entregar el software?',
      answer:
        'Sí, ofrecemos soporte técnico continuo para solucionar problemas, realizar actualizaciones y asegurar el buen funcionamiento de tu software.',
      open: false
    },
    {
      question: '¿Podéis integrar el software con sistemas que ya uso?',
      answer:
        'Sí, podemos integrar el software con tus sistemas actuales, como CRMs, ERPs u otras herramientas que uses en tu negocio.',
      open: false
    },
    {
      question: '¿El software será compatible con dispositivos móviles?',
      answer:
        'Sí, diseñamos software adaptable para que funcione perfectamente en móviles, tablets y computadoras.',
      open: false
    },
    {
      question: '¿Qué garantías ofrecéis sobre el software?',
      answer:
        'Ofrecemos garantías que cubren errores o fallos durante un período determinado después de la entrega, y también brindamos opciones de mantenimiento continuo.',
      open: false
    },
    {
      question: '¿Podéis trabajar con ideas que todavía no están muy definidas?',
      answer:
        '¡Claro que sí! Te ayudaremos a aterrizar tu idea, definir funcionalidades clave y desarrollar un software a medida.',
      open: false
    },
    {
      question: '¿Cómo se manejan los pagos por el desarrollo?',
      answer:
        'Dividimos los pagos en fases, como un adelanto inicial, pagos intermedios según hitos alcanzados, y un pago final al completar el proyecto.',
      open: false
    }
  ];

}
