import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { WorkComponent } from '../../shaders/work/work.component';
import { GoContactComponent } from '../../shaders/go-contact/go-contact.component';
import { FaqsComponent } from '../../shaders/faqs/faqs.component';
import { ServicesComponent } from '../../shaders/services/services.component';
import { InfoComponent } from '../../shaders/info/info.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ia',
  standalone: true,
  imports: [TopComponent, WorkComponent, GoContactComponent, FaqsComponent, ServicesComponent, InfoComponent],
  templateUrl: './ia.component.html',
  styleUrl: './ia.component.scss'
})
export class IaComponent {


constructor(private meta: Meta, private titleService: Title) { }

updateMetaTagsIAChatbots() {
  this.titleService.setTitle('ItnovaStudio - IA y Chatbots');
  this.meta.addTag({ name: 'description', content: 'ItnovaStudio ofrece soluciones de inteligencia artificial (IA) y chatbots personalizados para mejorar la interacción con tus clientes y optimizar procesos.' });
  this.meta.addTag({ name: 'keywords', content: 'IA, chatbots, inteligencia artificial, soluciones IA, automatización, atención al cliente, tecnología avanzada, chatbots personalizados' });
  this.meta.addTag({ property: 'og:title', content: 'ItnovaStudio - IA y Chatbots' });
  this.meta.addTag({ property: 'og:description', content: 'Mejora la atención al cliente y optimiza tus procesos con nuestras soluciones avanzadas de IA y chatbots a medida.' });
}

ngOnInit() {
  this.updateMetaTagsIAChatbots();
}

  steps = [
    {
      title: 'Análisis inicial',
      description:
        'Hablamos contigo para entender tu negocio, tus necesidades y cómo un chatbot con IA puede mejorar la experiencia de tus clientes.',
    },
    {
      title: 'Diseño e implementación',
      description:
        'Diseñamos y desarrollamos un chatbot personalizado con inteligencia artificial, incluyendo flujos de conversación y funcionalidades clave para atender a tus usuarios.',
    },
    {
      title: 'Lanzamiento y optimización',
      description:
        'Implementamos tu chatbot en las plataformas elegidas y ofrecemos soporte continuo, asegurándonos de que el bot evolucione según las necesidades de tus clientes.',
    }
  ];

  text: string = 'Descubre cómo podemos ayudarte a implementar un chatbot con inteligencia artificial que eleve la experiencia de tus clientes y optimice la atención al cliente.';

  title: string = 'Soluciones inteligentes con chatbots IA';
  description: string = 'Creamos chatbots personalizados, con flujos conversacionales dinámicos e integración avanzada, para garantizar que tu negocio esté siempre conectado con tus clientes.';

  gridItems = [
    {
      icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;}</style></defs><title>chat-bot</title><path d="M16,19a6.9908,6.9908,0,0,1-5.833-3.1287l1.666-1.1074a5.0007,5.0007,0,0,0,8.334,0l1.666,1.1074A6.9908,6.9908,0,0,1,16,19Z"></path><path d="M20,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,20,8Z"></path><path d="M12,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,12,8Z"></path><path d="M17.7358,30,16,29l4-7h6a1.9966,1.9966,0,0,0,2-2V6a1.9966,1.9966,0,0,0-2-2H6A1.9966,1.9966,0,0,0,4,6V20a1.9966,1.9966,0,0,0,2,2h9v2H6a3.9993,3.9993,0,0,1-4-4V6A3.9988,3.9988,0,0,1,6,2H26a3.9988,3.9988,0,0,1,4,4V20a3.9993,3.9993,0,0,1-4,4H21.1646Z"></path><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32"></rect></g></svg>',
      title: 'Diseño Personalizado',
      description: 'Creamos flujos conversacionales únicos y atractivos que se adaptan al estilo de tu marca.',
    },
    {
      icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A.999.999 0 0 0 2 12v2a1 1 0 0 0 1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0 1-1v-1.938a1.004 1.004 0 0 0-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z"></path></g></svg>',
      title: 'Automatización Inteligente',
      description: 'Integramos IA avanzada para responder automáticamente a las preguntas frecuentes de tus clientes.',
    },
    {
      icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3,20V10H8V21H4A1,1,0,0,1,3,20ZM21,4a1,1,0,0,0-1-1H4A1,1,0,0,0,3,4V8H21ZM20,21a1,1,0,0,0,1-1V10H10V21Z"></path></g></svg>',
      title: 'Soporte Multicanal',
      description: 'Desarrollamos chatbots que funcionan en múltiples plataformas, como tu sitio web, WhatsApp y redes sociales.',
    },
    {
      icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 24 24" id="update-alt" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M5.07,8A8,8,0,0,1,20,12" style="fill: none; stroke: #FF6600; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><path id="primary-2" data-name="primary" d="M18.93,16A8,8,0,0,1,4,12" style="fill: none; stroke: #FF6600; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path><polyline id="primary-3" data-name="primary" points="5 3 5 8 10 8" style="fill: none; stroke: #FF6600; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline><polyline id="primary-4" data-name="primary" points="19 21 19 16 14 16" style="fill: none; stroke: #FF6600; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline></g></svg>',
      title: 'Optimización Continua',
      description: 'Monitorizamos y mejoramos continuamente el rendimiento de tu chatbot para adaptarlo a las necesidades de tus clientes.',
    },
    {
      icon: '<svg fill="#FF6600" height="64px" width="64px" version="1.1" id="XMLID_223_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="optimization"> <g> <path d="M17,24V11h6v13H17z M19,13v9h2v-9H19z M15,24H9v-8h6V24z M11,22h2v-4h-2V22z M7,24H1v-6h6V24z M3,22h2v-2H3V22z M1,16v-2 c7.8,0,12.8-3.4,16.1-10.9l-4.3,1.7L12,2.9L19.5,0l3,7.2L20.6,8l-1.7-4.2C15.3,12.1,9.6,16,1,16z"></path> </g> </g> </g></svg>',
      title: 'Análisis y Reportes',
      description: 'Proporcionamos herramientas de análisis para que puedas medir la efectividad del chatbot en tiempo real.',
    },
    {
      icon: '<svg width="64px" height="64px" viewBox="0 0 1024 1024" fill="#FF6600" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M48.91 526.083h-39.047v458.365h1001.585v-458.365h-39.047zM691.728 206.87c-7.731-93.19-85.909-166.721-181.074-166.721s-173.344 73.53-181.074 166.721h-319.721v277.138h1001.585v-277.138h-319.721zM368.69 206.87c7.575-71.657 68.337-127.674 141.966-127.674s134.389 56.016 141.966 127.674h-283.929z"></path></g></svg>',
      title: 'Integración con tu Negocio',
      description: 'Conectamos el chatbot con tus sistemas internos, como CRM o gestión de inventarios, para una experiencia fluida.',
    },
    {
      icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path></g></svg>',
      title: 'Asistencia Personalizada',
      description: 'Ofrecemos soporte técnico continuo para garantizar el buen funcionamiento de tu chatbot.',
    },
    {
      icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,3H3A1,1,0,0,0,2,4V20a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V4A1,1,0,0,0,21,3ZM5.293,8.707A1,1,0,1,1,6.707,7.293l.793.793.793-.793A1,1,0,1,1,9.707,8.707L8.914,9.5l.793.793a1,1,0,0,1-1.414,1.414L7.5,10.914l-.793.793a1,1,0,0,1-1.414-1.414L6.086,9.5ZM19,14a1,1,0,0,1-2,0V12.414l-.192.192A14.9,14.9,0,0,1,6.2,17H6a1,1,0,0,1,0-2h.2a12.916,12.916,0,0,0,9.193-3.808L15.586,11H14a1,1,0,0,1,0-2h4a1,1,0,0,1,1,1Z"></path></g></svg>',
      title: 'Estrategias de Conversación',
      description: 'Creamos estrategias para mejorar la interacción con tus clientes y aumentar su satisfacción.',
    },
  ];

  goContactTitle = 'Explora Más Soluciones';
  goContactSecondTitle = '¿Necesitas un chatbot inteligente o buscas integrar IA en tu negocio?';
  goContactParagraph = 'Estamos aquí para ayudarte. Contáctanos para recibir asesoramiento, soporte técnico o soluciones personalizadas que lleven la experiencia de tus clientes al siguiente nivel.';

  faqs = [
    {
      question: '¿Qué incluye el diseño personalizado del chatbot?',
      answer:
        'Incluye la creación de un flujo conversacional único y adaptado a tu marca, con una experiencia optimizada para tus clientes.',
      open: true
    },
    {
      question: '¿El chatbot puede responder automáticamente las preguntas frecuentes?',
      answer:
        'Sí, configuramos el chatbot con inteligencia artificial para que pueda responder automáticamente preguntas frecuentes de manera precisa.',
      open: false
    },
    {
      question: '¿En qué plataformas puede funcionar el chatbot?',
      answer:
        'El chatbot puede integrarse en múltiples plataformas como tu sitio web, WhatsApp, Facebook Messenger, Instagram y más.',
      open: false
    },
    {
      question: '¿Ofrecéis soporte después del lanzamiento del chatbot?',
      answer:
        'Sí, ofrecemos soporte técnico continuo para garantizar que el chatbot funcione perfectamente y se adapte a las necesidades de tus clientes.',
      open: false
    },
    {
      question: '¿El chatbot puede manejar diferentes idiomas?',
      answer:
        'Sí, podemos configurar el chatbot para que funcione en múltiples idiomas y así atender a una audiencia global.',
      open: false
    },
    {
      question: '¿Puedo analizar el rendimiento del chatbot?',
      answer:
        'Sí, configuramos herramientas de análisis para que puedas monitorear las interacciones, el impacto y el rendimiento general del chatbot.',
      open: false
    },
    {
      question: '¿El chatbot puede integrarse con mis sistemas internos?',
      answer:
        'Sí, podemos integrarlo con sistemas internos como CRM, herramientas de gestión de inventarios o cualquier otra plataforma que uses.',
      open: false
    },
    {
      question: '¿Qué pasa si el chatbot no entiende una pregunta?',
      answer:
        'Si el chatbot no entiende una pregunta, podemos configurarlo para que derive a un agente humano o solicite más información al cliente.',
      open: false
    },
    {
      question: '¿Cuánto tiempo lleva desarrollar un chatbot?',
      answer:
        'El tiempo depende de los requisitos específicos, pero en general podemos entregarte un chatbot funcional en 2 a 3 semanas.',
      open: false
    },
    {
      question: '¿El chatbot puede ayudar a vender productos o servicios?',
      answer:
        'Sí, podemos configurar el chatbot para que maneje catálogos de productos, procesos de compra y pagos de manera automática.',
      open: false
    }
  ];
  
}
