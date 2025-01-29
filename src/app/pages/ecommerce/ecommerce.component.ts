import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { WorkComponent } from '../../shaders/work/work.component';
import { GoContactComponent } from '../../shaders/go-contact/go-contact.component';
import { FaqsComponent } from '../../shaders/faqs/faqs.component';
import { ServicesComponent } from '../../shaders/services/services.component';
import { InfoComponent } from '../../shaders/info/info.component';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [TopComponent, WorkComponent, GoContactComponent, FaqsComponent, ServicesComponent, InfoComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {

  constructor(private meta: Meta, private titleService: Title) { }

updateMetaTagsEcommerce() {
  this.titleService.setTitle('ItnovaStudio - Ecommerce');
  this.meta.addTag({ name: 'description', content: 'En ItnovaStudio diseñamos soluciones de ecommerce personalizadas para ayudarte a vender online de forma eficiente y segura.' });
  this.meta.addTag({ name: 'keywords', content: 'ecommerce, ItnovaStudio, tienda online, soluciones ecommerce, desarrollo ecommerce, ventas online, plataformas ecommerce' });
  this.meta.addTag({ property: 'og:title', content: 'ItnovaStudio - Ecommerce' });
  this.meta.addTag({ property: 'og:description', content: 'Transforma tu negocio con una tienda online a medida. Descubre nuestras soluciones ecommerce adaptadas a tus necesidades.' });
}

ngOnInit() {
  this.updateMetaTagsEcommerce();
}

  steps = [
    {
      title: 'Reunión inicial',
      description:
        'Conversamos contigo para entender tu negocio, tus productos y los objetivos de tu tienda online.',
    },
    {
      title: 'Diseño y desarrollo',
      description:
        'Creamos y personalizamos tu tienda online con todas las funcionalidades necesarias, como carrito de compras y pasarelas de pago.',
    },
    {
      title: 'Lanzamiento y soporte',
      description:
        'Lanzamos tu tienda online y te ofrecemos soporte continuo para garantizar que siempre funcione a la perfección.',
    }
  ];

  text: string = 'Descubre cómo podemos ayudarte a crear una tienda online única y funcional para llevar tu negocio al siguiente nivel.';

  title: string = 'Soluciones completas para tu tienda online';
  description: string = 'Ofrecemos desarrollo personalizado, diseño atractivo y funcionalidades avanzadas para garantizar el éxito de tu tienda online.';

  gridItems = [
    {
      icon: `<svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FF6600">
        <path d="M12 0L15 4H9L12 0ZM0 9L4 12L0 15V9ZM24 9V15L20 12L24 9ZM12 24L9 20H15L12 24ZM12 5C8.13 5 5 8.13 5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z" />
      </svg>`,
      title: 'Diseño Personalizado',
      description: 'Creamos diseños únicos y atractivos para destacar tu tienda online frente a la competencia.',
    },
    {
      icon: `<svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FF6600">
        <path d="M3 5H21C21.55 5 22 5.45 22 6V10H2V6C2 5.45 2.45 5 3 5ZM2 12H22V18C22 18.55 21.55 19 21 19H3C2.45 19 2 18.55 2 18V12ZM4 14C3.45 14 3 14.45 3 15C3 15.55 3.45 16 4 16H8C8.55 16 9 15.55 9 15C9 14.45 8.55 14 8 14H4Z" />
      </svg>`,
      title: 'Integración de Métodos de Pago',
      description: 'Implementamos pasarelas de pago seguras y variadas para facilitar las transacciones de tus clientes.',
    },
    {
      icon: `<svg width="64px" height="64px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.8832 4.69719C19.2737 4.30667 19.9069 4.30667 20.2974 4.69719L23.888 8.28778L27.469 4.7068C27.8595 4.31628 28.4927 4.31628 28.8832 4.7068C29.2737 5.09733 29.2737 5.73049 28.8832 6.12102L25.3022 9.702L28.7827 13.1825C29.1732 13.573 29.1732 14.2062 28.7827 14.5967C28.3922 14.9872 27.759 14.9872 27.3685 14.5967L23.888 11.1162L20.3979 14.6063C20.0074 14.9968 19.3743 14.9968 18.9837 14.6063C18.5932 14.2158 18.5932 13.5826 18.9837 13.1921L22.4738 9.702L18.8832 6.1114C18.4927 5.72088 18.4927 5.08771 18.8832 4.69719Z" fill="#FF6600"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.86 15.0513C24.0652 14.9829 24.2871 14.9829 24.4923 15.0513L39.2705 19.9765C39.4691 20.0336 39.6499 20.1521 39.783 20.323L43.7861 25.4612C43.9857 25.7173 44.0485 26.0544 43.9545 26.3652C43.8902 26.5779 43.7579 26.7602 43.5821 26.887L28.1827 32.0159L24.965 27.8858C24.7754 27.6424 24.4839 27.5001 24.1753 27.5004C23.8667 27.5007 23.5755 27.6434 23.3863 27.8871L20.186 32.0093L4.74236 26.8577C4.58577 26.7329 4.46805 26.5621 4.40853 26.3652C4.31456 26.0544 4.37733 25.7173 4.57688 25.4612L8.50799 20.4154C8.62826 20.2191 8.81554 20.0652 9.04466 19.9889L23.86 15.0513ZM35.8287 20.9376L24.1802 24.8197L12.5277 20.9362L24.1762 17.0541L35.8287 20.9376Z" fill="#FF6600"></path> <path d="M28.1442 34.1368L39.991 30.1911L39.9905 36.7628C39.9905 38.054 39.1642 39.2003 37.9392 39.6086L25.1762 43.863V31.4111L27.0393 33.8026C27.2997 34.1368 27.7423 34.2706 28.1442 34.1368Z" fill="#FF6600"></path> <path d="M23.1762 31.4191V43.863L10.4131 39.6086C9.18811 39.2003 8.36183 38.054 8.36175 36.7628L8.36132 30.1732L20.2251 34.1306C20.6277 34.2649 21.0712 34.1305 21.3314 33.7953L23.1762 31.4191Z" fill="#FF6600"></path> </g></svg>`,
      title: 'Gestión de Inventario',
      description: 'Configuramos herramientas para administrar tus productos y mantener un control eficiente del inventario.',
    },
    {
      icon: `<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,4V7H3V4A1,1,0,0,1,4,3H20A1,1,0,0,1,21,4ZM3,9H21V20a1,1,0,0,1-1,1H4a.974.974,0,0,1-.46-.126l3.587-3.587,2.318,1.545a1,1,0,0,0,1.262-.125l2-2a1,1,0,0,0-1.414-1.414l-1.42,1.42L7.555,15.168a1,1,0,0,0-1.262.125L3,18.586Zm11.293,4.707a1,1,0,0,0,1.414,0l1-1a1,1,0,0,0-1.414-1.414l-1,1A1,1,0,0,0,14.293,13.707Z"></path></g></svg>`,
      title: 'Optimización SEO',
      description: 'Optimizamos tu tienda online para mejorar su visibilidad en motores de búsqueda y atraer más clientes.',
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="#FF6600" width="64px" height="64px" viewBox="0 0 36 36" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="6.48" y="18" width="5.76" height="11.52" rx="1" ry="1"></rect><rect x="15.12" y="6.48" width="5.76" height="23.04" rx="1" ry="1"></rect><rect x="23.76" y="14.16" width="5.76" height="15.36" rx="1" ry="1"></rect></g></svg>`,
      title: 'Análisis y Reportes',
      description: 'Configuramos herramientas de análisis para que puedas monitorear el rendimiento de tu tienda.',
    },
    {
      icon: `<svg width="64px" height="64px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#FF6600" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>support</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="support" fill="#FF6600" transform="translate(42.666667, 42.666667)"> <path d="M379.734355,174.506667 C373.121022,106.666667 333.014355,-2.13162821e-14 209.067688,-2.13162821e-14 C85.1210217,-2.13162821e-14 45.014355,106.666667 38.4010217,174.506667 C15.2012632,183.311569 -0.101643453,205.585799 0.000508304259,230.4 L0.000508304259,260.266667 C0.000508304259,293.256475 26.7445463,320 59.734355,320 C92.7241638,320 119.467688,293.256475 119.467688,260.266667 L119.467688,230.4 C119.360431,206.121456 104.619564,184.304973 82.134355,175.146667 C86.4010217,135.893333 107.307688,42.6666667 209.067688,42.6666667 C310.827688,42.6666667 331.521022,135.893333 335.787688,175.146667 C313.347976,184.324806 298.68156,206.155851 298.667688,230.4 L298.667688,260.266667 C298.760356,283.199651 311.928618,304.070103 332.587688,314.026667 C323.627688,330.88 300.801022,353.706667 244.694355,360.533333 C233.478863,343.50282 211.780225,336.789048 192.906491,344.509658 C174.032757,352.230268 163.260418,372.226826 167.196286,392.235189 C171.132153,412.243552 188.675885,426.666667 209.067688,426.666667 C225.181549,426.577424 239.870491,417.417465 247.041022,402.986667 C338.561022,392.533333 367.787688,345.386667 376.961022,317.653333 C401.778455,309.61433 418.468885,286.351502 418.134355,260.266667 L418.134355,230.4 C418.23702,205.585799 402.934114,183.311569 379.734355,174.506667 Z M76.8010217,260.266667 C76.8010217,269.692326 69.1600148,277.333333 59.734355,277.333333 C50.3086953,277.333333 42.6676884,269.692326 42.6676884,260.266667 L42.6676884,230.4 C42.6676884,224.302667 45.9205765,218.668499 51.2010216,215.619833 C56.4814667,212.571166 62.9872434,212.571166 68.2676885,215.619833 C73.5481336,218.668499 76.8010217,224.302667 76.8010217,230.4 L76.8010217,260.266667 Z M341.334355,230.4 C341.334355,220.97434 348.975362,213.333333 358.401022,213.333333 C367.826681,213.333333 375.467688,220.97434 375.467688,230.4 L375.467688,260.266667 C375.467688,269.692326 367.826681,277.333333 358.401022,277.333333 C348.975362,277.333333 341.334355,269.692326 341.334355,260.266667 L341.334355,230.4 Z"> </path> </g> </g> </g></svg>`,
      title: 'Soporte Técnico',
      description: 'Te ofrecemos asistencia técnica continua para resolver cualquier problema en tu tienda online.',
    },
    {
      icon: `<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.25 2.1a1.25 1.25 0 0 0-1.17-.1L6.91 4.43a1.22 1.22 0 0 1-.46.09H2.5a1.25 1.25 0 0 0-1.25 1.25v.1H0v3h1.25V9a1.25 1.25 0 0 0 1.25 1.22L4 13.4a1.26 1.26 0 0 0 1.13.72h.63A1.25 1.25 0 0 0 7 12.87v-2.53l6.08 2.43a1.27 1.27 0 0 0 .47.09 1.29 1.29 0 0 0 .7-.22 1.25 1.25 0 0 0 .55-1V3.13a1.25 1.25 0 0 0-.55-1.03zm-8.5 3.67V9H2.5V5.77zm0 7.1h-.63l-1.23-2.65h1.86zm1.62-3.72A2.29 2.29 0 0 0 7 9V5.7a2.26 2.26 0 0 0 .37-.11l6.18-2.46v8.48zm7.46-3.03v2.5a1.25 1.25 0 0 0 0-2.5z"></path></g></svg>`,
      title: 'Estrategias de Marketing',
      description: 'Te ayudamos a implementar campañas de marketing efectivas para aumentar las ventas de tu tienda.',
    },
    {
      icon: `<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 24 24" id="update-alt" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M5.07,8A8,8,0,0,1,20,12" style="fill: none; stroke: #FF6600; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path id="primary-2" data-name="primary" d="M18.93,16A8,8,0,0,1,4,12" style="fill: none; stroke: #FF6600; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><polyline id="primary-3" data-name="primary" points="5 3 5 8 10 8" style="fill: none; stroke: #FF6600; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline><polyline id="primary-4" data-name="primary" points="19 21 19 16 14 16" style="fill: none; stroke: #FF6600; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline></g></svg>`,
      title: 'Mantenimiento y Actualizaciones',
      description: 'Garantizamos que tu tienda esté siempre actualizada y funcionando de manera eficiente.',
    },
  ];

  goContactTitle = 'Explora Más Servicios';
  goContactSecondTitle = '¿Necesitas ayuda con tu tienda online o buscas soluciones personalizadas?';
  goContactParagraph = 'Estamos aquí para ayudarte. Contáctanos para recibir asesoramiento, soporte técnico o soluciones específicas para llevar tu tienda online al siguiente nivel.';

  faqs = [
    {
      question: '¿Qué incluye el diseño personalizado de la tienda online?',
      answer:
        'Incluye la creación de un diseño único y adaptado a tu marca, con una experiencia de usuario optimizada para tus clientes.',
      open: true
    },
    {
      question: '¿Puedo gestionar yo mismo los productos en mi tienda?',
      answer:
        'Sí, configuramos herramientas fáciles de usar para que puedas agregar, editar o eliminar productos de manera sencilla.',
      open: false
    },
    {
      question: '¿Qué métodos de pago pueden integrarse en la tienda?',
      answer:
        'Podemos integrar múltiples métodos de pago como tarjetas de crédito, PayPal, transferencias bancarias y opciones locales según tu región.',
      open: false
    },
    {
      question: '¿Ofrecéis soporte después del lanzamiento de la tienda?',
      answer:
        'Sí, ofrecemos soporte técnico continuo para asegurarnos de que tu tienda funcione perfectamente y esté siempre actualizada.',
      open: false
    },
    {
      question: '¿Podéis ayudarme a mejorar la visibilidad de mi tienda en Internet?',
      answer:
        'Por supuesto, implementamos estrategias de SEO y marketing digital para mejorar la visibilidad de tu tienda y atraer más clientes.',
      open: false
    },
    {
      question: '¿Puedo tener un sistema de análisis de ventas en mi tienda?',
      answer:
        'Sí, configuramos herramientas de análisis para que puedas monitorear tus ventas, tráfico y rendimiento general de la tienda.',
      open: false
    },
    {
      question: '¿Puedo vender productos digitales en la tienda?',
      answer:
        'Sí, configuramos tu tienda para que puedas vender tanto productos físicos como digitales, como ebooks, cursos, música, y más.',
      open: false
    },
    {
      question: '¿Qué pasa si tengo problemas técnicos con la tienda?',
      answer:
        'Ofrecemos soporte técnico y mantenimiento continuo para resolver cualquier problema técnico que pueda surgir.',
      open: false
    },
    {
      question: '¿Cuánto tiempo lleva desarrollar una tienda online?',
      answer:
        'El tiempo depende de los requisitos específicos, pero en general podemos entregarte una tienda funcional en 2 a 4 semanas.',
      open: false
    },
    {
      question: '¿Puedo vincular mi tienda a redes sociales?',
      answer:
        'Sí, configuramos tu tienda para que se integre con tus redes sociales, lo que facilita compartir productos y promociones.',
      open: false
    }
  ];

}
