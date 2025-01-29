import { Component } from '@angular/core';
import { GoContactComponent } from '../../shaders/go-contact/go-contact.component';
import { FaqsComponent } from '../../shaders/faqs/faqs.component';
import { ServicesComponent } from '../../shaders/services/services.component';
import { TopComponent } from '../../shaders/top/top.component';
import { WorkComponent } from '../../shaders/work/work.component';
import { InfoComponent } from '../../shaders/info/info.component';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-software',
  standalone: true,
  imports: [TopComponent, WorkComponent, GoContactComponent, FaqsComponent, ServicesComponent, InfoComponent],
  templateUrl: './software.component.html',
  styleUrl: './software.component.scss'
})
export class SoftwareComponent {

  constructor(private meta: Meta, private titleService: Title) { }

updateMetaTagsSoftwarePersonalizado() {
  this.titleService.setTitle('ItnovaStudio - Software Personalizado');
  this.meta.addTag({ name: 'description', content: 'ItnovaStudio crea soluciones de software personalizado adaptadas a las necesidades específicas de tu negocio para optimizar procesos y mejorar la eficiencia.' });
  this.meta.addTag({ name: 'keywords', content: 'software personalizado, ItnovaStudio, soluciones a medida, desarrollo de software, aplicaciones personalizadas, tecnología a medida' });
  this.meta.addTag({ property: 'og:title', content: 'ItnovaStudio - Software Personalizado' });
  this.meta.addTag({ property: 'og:description', content: 'Desarrollamos software a medida para que tu empresa alcance su máximo potencial. Soluciones personalizadas y eficientes para tu negocio.' });
}

ngOnInit() {
  this.updateMetaTagsSoftwarePersonalizado();
}

  steps = [
    {
      title: 'Comparte tu idea',
      description:
        'Cuéntanos sobre tu proyecto o idea. Juntos definiremos los objetivos y las funcionalidades clave para tu software personalizado.',
    },
    {
      title: 'Desarrollo a medida',
      description:
        'Transformamos tu idea en realidad. Diseñamos y desarrollamos el software según tus necesidades, asegurando calidad y precisión.',
    },
    {
      title: 'Entrega y soporte',
      description:
        'Lanzamos el software en tu infraestructura y te brindamos soporte continuo para garantizar su funcionamiento óptimo.',
    },
  ];

  text: string = '¿Tienes una idea? Como administrar reservas, controlar inventarios o mejorar tu negocio, nosotros hacemos el software que necesitas.';

title: string = 'Software hecho para ti';
description: string = 'Creamos programas fáciles de usar, diseñados para ayudarte con lo que necesites en tu negocio o proyecto.';
  

gridItems = [
  {
    icon: '<svg width="64px" height="64px" viewBox="0 -48.89 324.864 324.864" xmlns="http://www.w3.org/2000/svg" fill="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.a{fill:#ffffff;}.b{fill:#d9d9d9;}.c{fill:#FF6600;}.d{fill:#FF6600;}</style></defs><path class="a" d="M38.306,122.853c-.013-34.678-.031-80.643-.042-109.985A10.386,10.386,0,0,1,48.655,2.476c44.775-.014,174.516-.058,227.6-.077a10.394,10.394,0,0,1,10.4,10.4c0,39.362.016,103.291.032,144.02,8.222,11.554,25.861,35.87,34.487,50.6a9.526,9.526,0,0,1,1.3,4.827c0,1.5-.032,3.322-.032,5.2a7.217,7.217,0,0,1-7.216,7.208H8.531a6.016,6.016,0,0,1-6.018-6.015c0-9.282-.034,2.724-.034-6.381a9.578,9.578,0,0,1,1.3-4.847c8.719-14.89,26.43-39.972,34.536-51.352C38.316,147.66,38.312,136.077,38.306,122.853Z"></path><path class="b" d="M269.638,160.864a6.283,6.283,0,0,1,5.157,2.694c3.912,5.586,8.118,11.762,11.857,17.781a3.028,3.028,0,0,1-2.564,4.634H40.881a3.025,3.025,0,0,1-2.582-4.61c3.747-6.034,7.965-12.227,11.886-17.829a6.268,6.268,0,0,1,5.144-2.675c44.876,0,169.432,0,214.309,0"></path><path class="c" d="M269.638,163.264c1.779.054,2.776,1.062,3.739,2.442q1.948,2.793,3.864,5.607,1.89,2.783,3.736,5.6.921,1.407,1.826,2.824a18.155,18.155,0,0,1,1.854,2.957c.176.466-.028.811-.648.883a5.225,5.225,0,0,1-.587,0H42.216a4.345,4.345,0,0,1-1.7-.113.6.6,0,0,1-.271-.528,8.408,8.408,0,0,1,1.135-1.97c2.439-3.861,4.974-7.661,7.556-11.427a33.489,33.489,0,0,1,3.68-5.174,4.525,4.525,0,0,1,3.438-1.1h26.1l33.646,0H269.638c3.088,0,3.093-4.8,0-4.8H94.224l-29.857,0H58.316c-2.826,0-5.629-.126-8.041,1.638-1.784,1.3-2.906,3.283-4.144,5.073q-1.965,2.84-3.892,5.705-2.017,3-3.974,6.048c-1.107,1.728-2.692,3.585-2.8,5.721-.179,3.424,2.639,5.7,5.863,5.729,1.843.013,3.686,0,5.529,0H281.978c.656,0,1.315.019,1.971,0a5.719,5.719,0,0,0,3.279-1.018,5.458,5.458,0,0,0,2.267-4.729c-.129-2.208-1.786-4.133-2.935-5.921-2.414-3.757-4.911-7.46-7.45-11.134-1.151-1.666-2.221-3.642-3.778-4.963a9.031,9.031,0,0,0-5.694-2.144c-3.09-.094-3.087,4.706,0,4.8Z"></path><path class="a" d="M52.292,15.763c.014,35.8.057,131.59.057,131.59,37.213-.014,184.2-.063,220.317-.073-.016-38.714-.042-99.076-.057-131.585C272.609,15.7,84.778,15.756,52.292,15.763Z"></path><path class="c" d="M285.035,209.457H49.576c-3.192,0-6.391-.059-9.584,0-.136,0-.272,0-.409,0-3.088,0-3.093,4.8,0,4.8H275.042c3.192,0,6.391.06,9.583,0,.137,0,.273,0,.41,0,3.088,0,3.093-4.8,0-4.8Z"></path><path class="c" d="M40.706,122.853l-.024-63.462L40.67,28.8q0-6.722-.005-13.444c0-1.977-.139-3.942.7-5.79a8.1,8.1,0,0,1,3.982-3.982c2.472-1.131,5.576-.7,8.236-.7l8.014,0,19.03-.006,46.621-.016,52.337-.017,50.461-.018L271.213,4.8c3.088,0,6.512-.482,9.26,1.2a7.924,7.924,0,0,1,3.38,4.269A18.4,18.4,0,0,1,284.26,16q0,13.4,0,26.8,0,30.6.013,61.191l.009,29.811q0,6.852,0,13.7l0,6.428c0,.954-.068,1.937,0,2.888a5.559,5.559,0,0,0,1.427,2.754c10.352,14.509,20.892,28.94,30.351,44.057,1.031,1.649,2.1,3.3,3.036,5,1.382,2.5.963,5.439.942,8.193a5.123,5.123,0,0,1-2.389,4.775,6.441,6.441,0,0,1-3.446.657H11.4c-1.542,0-3.463.288-4.809-.563-2.374-1.5-1.519-4.456-1.685-6.812-.179-2.549-4.1-3.438-4.714-.638a16.014,16.014,0,0,0-.1,1.662h4.8a14.363,14.363,0,0,1,.49-6.323c1.123-2.816,3.2-5.491,4.81-8.048,3.728-5.911,7.607-11.726,11.534-17.506q5.831-8.581,11.809-17.061,2.511-3.573,5.041-7.134a12.192,12.192,0,0,0,2.063-3.134c.441-1.588.084-3.765.084-5.4l-.012-28.441c0-3.088-4.8-3.093-4.8,0q.008,16.6.014,33.2l.327-1.211c-11.3,15.868-22.675,31.792-32.8,48.446C1.881,205.866.374,208.318.12,211.405A25.245,25.245,0,0,0,.087,215.9a2.4,2.4,0,0,0,4.8,0c.047-.406.207-1.646-.067-.386l-4.715-.638c.242,3.441-.319,6.6,2.2,9.415,2.186,2.444,5.112,2.76,8.165,2.76H311.7c2.062,0,4.3.207,6.29-.4a9.814,9.814,0,0,0,5.436-4.183c1.443-2.32,1.415-4.831,1.437-7.47.027-3.133-.045-5.981-1.609-8.792-1.014-1.822-2.149-3.587-3.258-5.352-2.488-3.964-5.071-7.868-7.69-11.745-5.522-8.177-11.217-16.236-16.946-24.269q-3.294-4.619-6.593-9.233l.328,1.211q-.01-28.089-.019-56.179-.009-30.119-.012-60.235,0-13.108,0-26.218c0-4.44-1.218-8.525-4.829-11.378C280.95.211,277.306,0,273.308,0l-39.76.014L184.182.031,132.354.049,85.208.064,49.775.075c-4.1,0-7.946,1.156-10.721,4.349-3.116,3.585-3.19,7.7-3.189,12.2q.006,14.144.011,28.288.012,31.718.025,63.434,0,7.255,0,14.51C35.908,125.942,40.708,125.947,40.706,122.853Z"></path><path class="c" d="M49.892,15.763q0,13.3.011,26.6.008,16.749.014,33.5l.015,33.171.012,26.165c0,3.986-.155,8.008,0,11.992,0,.056,0,.112,0,.168a2.435,2.435,0,0,0,2.4,2.4l32.781-.012,47.918-.016,53.455-.018,48.84-.016,34.558-.011h2.765a2.435,2.435,0,0,0,2.4-2.4q-.01-26.2-.022-52.408l-.024-54.155q0-12.512-.011-25.022a2.434,2.434,0,0,0-2.4-2.4H267.56l-13.87.005-20.779.007-25.77.008-28.849.009-30.012.01-29.261.009-26.595.008-22.015.006-15.52,0h-2.6c-3.089,0-3.094,4.8,0,4.8l13.633,0,20.6-.006,25.648-.008,28.784-.009,30-.01,29.311-.009,26.7-.009,22.18-.007,15.744,0c2.45,0,4.945.137,7.392,0,.105-.006.213,0,.318,0l-2.4-2.4.021,47.975.024,55.39.012,28.22,2.4-2.4-32.262.009-47.653.016-53.44.018-49.076.016-35.044.013H52.349l2.4,2.4q-.006-4.877,0-9.752-.006-12.391-.011-24.784l-.015-32.661q-.008-16.929-.014-33.857l-.012-27.817V15.763C54.691,12.675,49.891,12.67,49.892,15.763Z"></path><path class="a" d="M229.572,190.422a29.26,29.26,0,0,1-7.938-6.908A100.05,100.05,0,0,1,211.9,168.9c-1.293-2.3-1.821-4.739-.131-6.771a6.788,6.788,0,0,1,6.368-2.3l2.041.618c-3.124-8.095-8.269-21.412-11.523-29.873-1.117-2.906-.853-7.089,3.164-8.634a6.36,6.36,0,0,1,8.565,3.9l9.045,23.528.207-1.009a6.237,6.237,0,0,1,5.756-5.018,4.812,4.812,0,0,1,5.225,3.632,5.273,5.273,0,0,1,4.74-4.941c2.834-.419,5.805.759,6.467,3.287.362-2.089,1.832-2.881,3.734-3.46,2.5-.759,6.06,1.927,6.952,4.247,1.778,4.623,3.2,8.343,5.21,13.562a59.464,59.464,0,0,1,1.826,6.193c2.234,12.619-4.673,17.624-7.837,20.327a39.971,39.971,0,0,1-15.6,6.55C241.428,193.58,235.613,193.879,229.572,190.422Z"></path><path class="c" d="M224.845,165.914q-5.461-14.235-10.977-28.451c-.982-2.549-2.033-5.084-2.947-7.658-.67-1.89-.822-4.187,1.156-5.345a4.053,4.053,0,0,1,5.81,1.666,59.393,59.393,0,0,1,2.579,6.589l6.722,17.483a2.471,2.471,0,0,0,2.952,1.677,2.418,2.418,0,0,0,1.676-2.953l-6.483-16.864c-1.009-2.622-1.889-5.355-3.079-7.9a8.741,8.741,0,0,0-8.312-5.11A8.557,8.557,0,0,0,206,125.1c-.819,3.046.218,5.78,1.3,8.586q3.552,9.228,7.116,18.451,2.9,7.524,5.806,15.05a2.47,2.47,0,0,0,2.952,1.676,2.418,2.418,0,0,0,1.676-2.953Z"></path><path class="c" d="M231.948,149a3.978,3.978,0,0,1,2.973-3.187c1.489-.311,3.024.248,3.38,1.8.619,2.7,4.637,2.008,4.714-.638.082-2.831,5.63-3.833,6.493-1.016.657,2.144,4.115,2.42,4.628,0a2.4,2.4,0,0,1,3.185-1.65,5.783,5.783,0,0,1,3.336,3.641c1.828,4.757,3.923,9.5,5.431,14.364a24.609,24.609,0,0,1,1.343,10.793,14.806,14.806,0,0,1-1.483,4.753,16.85,16.85,0,0,1-1.168,1.915c-.091.129-.183.257-.278.384-.265.354.341-.412-.123.153q-.353.429-.727.841a28.919,28.919,0,0,1-2.619,2.477,21.76,21.76,0,0,1-3.675,2.471,37.517,37.517,0,0,1-13.366,4.564c.331-.046-.495.057-.639.072-.44.045-.88.082-1.32.107-.823.048-1.649.06-2.472.029a18.594,18.594,0,0,1-5.207-.926c-4.455-1.431-8.08-4.578-11.023-8.126-1.093-1.319-1.71-2.151-2.785-3.662-1.484-2.087-2.883-4.236-4.214-6.423-.848-1.394-1.7-2.8-2.466-4.237-.512-.963-1.072-2.234-.6-3.32a3.84,3.84,0,0,1,2.014-1.73,8.033,8.033,0,0,1,1.166-.335,5.859,5.859,0,0,1,.675-.026c.567-.015.041-.033.375.054,2.991.782,4.267-3.846,1.276-4.629a8.849,8.849,0,0,0-7.154,1.536,7.464,7.464,0,0,0-3.019,8.164c.793,3.049,2.93,5.931,4.592,8.567,1.315,2.084,2.693,4.129,4.158,6.11,3.024,4.088,6.419,7.943,10.867,10.525a24.521,24.521,0,0,0,13.141,3.26c8.929-.3,18.384-3.941,24.81-10.222a20.02,20.02,0,0,0,5.657-9.834,27.4,27.4,0,0,0-.9-13.887c-.936-3.173-2.253-6.236-3.438-9.322l-1.752-4.564a18,18,0,0,0-1.9-4.252c-1.7-2.334-4.556-4.368-7.559-4.255a7.177,7.177,0,0,0-6.767,5.343h4.628c-1.125-3.672-4.939-5.466-8.6-5.07-3.9.421-7.2,3.3-7.317,7.363l4.714-.638c-.885-3.86-4.828-5.839-8.557-5.278a8.691,8.691,0,0,0-7.052,6.664c-.694,3.006,3.933,4.289,4.628,1.276Z"></path><path class="b" d="M162.477,32.547a49.423,49.423,0,0,0-29.618,9.558A48.232,48.232,0,0,0,115.87,66.283c-5.9,18.967-.2,41.746,15.723,54.121,15.825,12.3,39.881,13.516,57.139,3.429,17.433-10.191,24.893-31.244,21.945-50.662a48.238,48.238,0,0,0-13.138-26.356,47.754,47.754,0,0,0-26.752-13.609,56.528,56.528,0,0,0-8.31-.659c-3.089-.01-3.093,4.79,0,4.8a45.159,45.159,0,0,1,26.9,8.663A42.706,42.706,0,0,1,204.45,67.5c5.3,17.022.629,37.549-13.389,48.943-6.755,5.491-15.52,8.455-24.22,9.1-9.252.688-18.723-.827-26.9-5.34a40.773,40.773,0,0,1-17.226-18.564,48.433,48.433,0,0,1-3.76-27.471,44.014,44.014,0,0,1,11.818-23.892,43.476,43.476,0,0,1,24.473-12.407,47.779,47.779,0,0,1,7.229-.519C165.565,37.337,165.571,32.537,162.477,32.547Z"></path><path class="d" d="M140.139,86.948c4.417,4.423,8.745,8.934,13.16,13.359a6.209,6.209,0,0,0,8.641,0Q175.6,86.9,189.006,73.231a6.11,6.11,0,0,0-8.641-8.641Q166.988,78.28,153.3,91.665h8.641c-4.415-4.425-8.743-8.935-13.16-13.358a6.11,6.11,0,1,0-8.641,8.641Z"></path></g></svg>', 
    title: 'Administración de Reservas',
    description: 'Desarrollamos sistemas para gestionar fácilmente tus reservas y agendas de manera eficiente.',
  },
  {
    icon: '<svg width="64px" height="64px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.8832 4.69719C19.2737 4.30667 19.9069 4.30667 20.2974 4.69719L23.888 8.28778L27.469 4.7068C27.8595 4.31628 28.4927 4.31628 28.8832 4.7068C29.2737 5.09733 29.2737 5.73049 28.8832 6.12102L25.3022 9.702L28.7827 13.1825C29.1732 13.573 29.1732 14.2062 28.7827 14.5967C28.3922 14.9872 27.759 14.9872 27.3685 14.5967L23.888 11.1162L20.3979 14.6063C20.0074 14.9968 19.3743 14.9968 18.9837 14.6063C18.5932 14.2158 18.5932 13.5826 18.9837 13.1921L22.4738 9.702L18.8832 6.1114C18.4927 5.72088 18.4927 5.08771 18.8832 4.69719Z" fill="#FF6600"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.86 15.0513C24.0652 14.9829 24.2871 14.9829 24.4923 15.0513L39.2705 19.9765C39.4691 20.0336 39.6499 20.1521 39.783 20.323L43.7861 25.4612C43.9857 25.7173 44.0485 26.0544 43.9545 26.3652C43.8902 26.5779 43.7579 26.7602 43.5821 26.887L28.1827 32.0159L24.965 27.8858C24.7754 27.6424 24.4839 27.5001 24.1753 27.5004C23.8667 27.5007 23.5755 27.6434 23.3863 27.8871L20.186 32.0093L4.74236 26.8577C4.58577 26.7329 4.46805 26.5621 4.40853 26.3652C4.31456 26.0544 4.37733 25.7173 4.57688 25.4612L8.50799 20.4154C8.62826 20.2191 8.81554 20.0652 9.04466 19.9889L23.86 15.0513ZM35.8287 20.9376L24.1802 24.8197L12.5277 20.9362L24.1762 17.0541L35.8287 20.9376Z" fill="#FF6600"></path> <path d="M28.1442 34.1368L39.991 30.1911L39.9905 36.7628C39.9905 38.054 39.1642 39.2003 37.9392 39.6086L25.1762 43.863V31.4111L27.0393 33.8026C27.2997 34.1368 27.7423 34.2706 28.1442 34.1368Z" fill="#FF6600"></path> <path d="M23.1762 31.4191V43.863L10.4131 39.6086C9.18811 39.2003 8.36183 38.054 8.36175 36.7628L8.36132 30.1732L20.2251 34.1306C20.6277 34.2649 21.0712 34.1305 21.3314 33.7953L23.1762 31.4191Z" fill="#FF6600"></path> </g></svg>',
    title: 'Gestión de Inventarios',
    description: 'Creamos herramientas para controlar el inventario de tu negocio en tiempo real.',
  },
  {
    icon: '<svg fill="#FF6600" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 256 190" enable-background="new 0 0 256 190" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M48.12,27.903C48.12,13.564,59.592,2,74.023,2c14.339,0,25.903,11.564,25.903,25.903 C99.834,42.335,88.27,53.806,74.023,53.806C59.684,53.806,48.12,42.242,48.12,27.903z M191,139h-47V97c0-20.461-17.881-37-38-37H43 C20.912,60,1.99,79.14,2,98v77c-0.026,8.533,6.001,12.989,12,13c6.014,0.011,12-4.445,12-13v-75h8v88h78v-88h8l0.081,50.37 c-0.053,8.729,5.342,12.446,10.919,12.63h60C207.363,163,207.363,139,191,139z M245.044,120.005V46.524h-14.788v73.482h-4.957V62.77 h-14.788v57.236h-4.999V90.721h-14.788v29.284h-4.957v-14.913h-14.788v14.913h-8.373v-79.73H157v85.449h97v-5.606v-0.113H245.044z"></path> </g></svg>', 
    title: 'Control Financiero',
    description: 'Desarrollamos software para llevar un control preciso de ingresos, gastos y reportes financieros.',
  },
  {
    icon: '<svg width="64px" height="64px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="16" height="16" id="icon-bound" fill="none"></rect> <path d="M16,12.5C16,11.837 15.737,11.201 15.268,10.732C14.799,10.263 14.163,10 13.5,10C11.447,10 8.553,10 6.5,10C5.837,10 5.201,10.263 4.732,10.732C4.263,11.201 4,11.837 4,12.5C4,14.147 4,15 4,15L16,15C16,15 16,14.147 16,12.5ZM3,13L0,13C0,13 0,12.147 0,10.5C0,9.837 0.263,9.201 0.732,8.732C1.201,8.263 1.837,8 2.5,8L6.536,8C6.754,8.376 7.031,8.714 7.355,9L6.5,9C4.567,9 3,10.567 3,12.5L3,13ZM10,3C11.656,3 13,4.344 13,6C13,7.656 11.656,9 10,9C8.344,9 7,7.656 7,6C7,4.344 8.344,3 10,3ZM6.126,6.997C6.084,6.999 6.042,7 6,7C4.344,7 3,5.656 3,4C3,2.344 4.344,1 6,1C7.026,1 7.932,1.516 8.473,2.302C7.022,2.903 6,4.333 6,6C6,6.344 6.044,6.679 6.126,6.997Z"></path> </g></svg>',
    title: 'Portales de Clientes',
    description: 'Creamos plataformas donde tus clientes puedan acceder a servicios, pagos o información personalizada.',
  },
  {
    icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.5,15.5h-5a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V20H12a1,1,0,0,0,0-2H8.5V16.5A1,1,0,0,0,7.5,15.5Zm-1,5h-3v-3h3ZM4,8.858V13a1,1,0,0,0,2,0V8.858a4,4,0,1,0-2,0ZM5,3A2,2,0,1,1,3,5,2,2,0,0,1,5,3ZM20,15.142V12a1,1,0,0,0-2,0v3.142a4,4,0,1,0,2,0ZM19,21a2,2,0,1,1,2-2A2,2,0,0,1,19,21ZM16.5,8.5h5a1,1,0,0,0,1-1v-5a1,1,0,0,0-1-1h-5a1,1,0,0,0-1,1V4H12a1,1,0,0,0,0,2h3.5V7.5A1,1,0,0,0,16.5,8.5Zm1-5h3v3h-3Z"></path></g></svg>',
    title: 'Automatización de Procesos',
    description: 'Digitalizamos y automatizamos procesos repetitivos para ahorrar tiempo y mejorar tu productividad.',
  },
  {
    icon: '<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V12Z" stroke="#FF6600" stroke-width="2" stroke-linecap="round"></path> <path d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V12C10 12.5523 9.55228 13 9 13H5C4.44772 13 4 12.5523 4 12V5Z" stroke="#FF6600" stroke-width="2" stroke-linecap="round"></path> <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V17Z" stroke="#FF6600" stroke-width="2" stroke-linecap="round"></path> <path d="M13 5C13 4.44772 13.4477 4 14 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H14C13.4477 8 13 7.55228 13 7V5Z" stroke="#FF6600" stroke-width="2" stroke-linecap="round"></path> </g></svg>',
    title: 'Panel de Administración',
    description: 'Desarrollamos paneles intuitivos para que administres tu negocio fácilmente desde cualquier lugar.',
  },
  {
    icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path></g></svg>', 
    title: 'Soporte y Actualizaciones',
    description: 'Te brindamos soporte técnico continuo y actualizaciones para mantener tu software al día.',
  },
  {
    icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-4.231-1.918a3.692 3.692 0 1 0-7.384 0 3.748 3.748 0 0 0 .389 1.665 7.163 7.163 0 0 0 .723 1.137 2.128 2.128 0 0 1 .483.857v.817a.633.633 0 0 0 .634.633h2.926a.633.633 0 0 0 .633-.633v-.817a2.125 2.125 0 0 1 .483-.857 7.142 7.142 0 0 0 .724-1.137 3.748 3.748 0 0 0 .389-1.665zm-1.913 5.942a.317.317 0 0 0-.316-.316H7.03a.317.317 0 1 0 0 .633h2.926a.317.317 0 0 0 .316-.317zm-.473.933a.158.158 0 0 0-.15-.107H7.298a.158.158 0 0 0-.098.283 2.075 2.075 0 0 0 2.547 0 .158.158 0 0 0 .053-.176z"></path></g></svg>', 
    title: 'Tu Idea Única',
    description: '¿Tienes una idea especial o diferente? Cuéntanos y la convertiremos en el software que necesitas.',
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
