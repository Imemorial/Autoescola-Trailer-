import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { GoContactComponent } from '../../shaders/go-contact/go-contact.component';
import { FaqsComponent } from "../../shaders/faqs/faqs.component";
import { WorkComponent } from '../../shaders/work/work.component';
import { ServicesComponent } from '../../shaders/services/services.component';

@Component({
  selector: 'app-technical-service',
  standalone: true,
  imports: [TopComponent, WorkComponent, GoContactComponent, FaqsComponent, ServicesComponent],
  templateUrl: './technical-service.component.html',
  styleUrl: './technical-service.component.scss'
})
export class TechnicalServiceComponent {
  
  steps = [
    {
      title: 'Contáctanos',
      description:
        'Escríbenos o llámanos para explicar el problema de tu equipo. Nuestro equipo te dará una solución inicial.',
    },
    {
      title: 'Diagnóstico y reparación',
      description:
        'Revisamos tu equipo en profundidad y solucionamos los problemas, desde fallas de hardware hasta software.',
    },
    {
      title: 'Entrega y garantía',
      description:
        'Recibe tu equipo reparado con garantía de calidad, listo para volver a usar como nuevo.',
    },
  ];

  text : string = 'Descubre cómo nuestros servicios técnicos en reparación de computadoras y laptops pueden ayudarte de manera rápida y efectiva.';

  title: string = 'Soluciones completas para tu equipo';
  description: string = 'Ofrecemos servicios especializados para garantizar el mejor rendimiento, mantenimiento y soporte técnico para tus equipos.';

  gridItems = [
    {
      icon: '<svg fill="#FF6600" height="64px" width="64px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" stroke="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23,28c-1.1,0-2.1-0.7-2.5-1.8c0-0.1,0-0.2-0.1-0.2h-8.9c0,0.1,0,0.2-0.1,0.2C11.1,27.3,10.1,28,9,28c-0.6,0-1,0.4-1,1 s0.4,1,1,1h14c0.6,0,1-0.4,1-1S23.6,28,23,28z"></path> <path d="M27,3H5C3.3,3,2,4.3,2,6v15c0,1.7,1.3,3,3,3h6.9h8.1H27c1.7,0,3-1.3,3-3V6C30,4.3,28.7,3,27,3z M25.3,18h-5.4 c0.1-0.3,0.1-0.7,0.1-1c0-2.2-1.8-4-4-4s-4,1.8-4,4c0,0.3,0.1,0.7,0.1,1H6.7c0-0.3-0.1-0.7-0.1-1c0-0.7,0.1-1.4,0.3-2.2 C7,14.3,7.5,14,8,14.1c0.6,0.1,1.2-0.2,1.6-0.8c0.3-0.5,0.3-1.2-0.1-1.7c-0.3-0.4-0.3-1,0.1-1.3c1.1-1,2.4-1.8,3.8-2.2 c0.1,0,0.2,0,0.3,0c0.4,0,0.8,0.2,0.9,0.6c0.2,0.6,0.8,1,1.4,1s1.2-0.4,1.4-1c0.2-0.5,0.7-0.7,1.2-0.6c1.4,0.4,2.7,1.2,3.8,2.2 c0.4,0.4,0.4,0.9,0.1,1.3c-0.4,0.5-0.4,1.2-0.1,1.7s0.9,0.9,1.6,0.8c0.5-0.1,1,0.3,1.1,0.8c0.2,0.7,0.3,1.5,0.3,2.2 C25.3,17.3,25.3,17.7,25.3,18z"></path> </g></svg>', 
      title: 'Limpieza de PC',
      description: 'Realizamos limpieza interna y externa para mantener tu equipo en óptimas condiciones y prevenir fallos.'
    },
    {
      icon: '<svg fill="#FF6600" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 384.981 384.981" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M192.491,197.204c24.125,0,80.846-29.034,80.846-98.604c0-9.705-0.236-19.079-1.036-27.938 c-1.313-17.429-4.883-32.876-13.771-44.714C247.129,9.837,227.18,0,192.491,0c-34.682,0-54.63,9.834-66.032,25.939 c-8.893,11.841-12.465,27.292-13.778,44.727c-0.8,8.857-1.036,18.231-1.036,27.934C111.645,168.17,168.366,197.204,192.491,197.204 z M218.88,36.123c-2.354,5.951-3.534,8.927-5.89,14.877c-15.209-4.297-25.791-4.297-41,0c-2.356-5.95-3.534-8.926-5.891-14.877 C185.12,30.365,199.862,30.366,218.88,36.123z M123.673,83.517c0.931,2.038,4.888,9.87,11.013,10.604 c7.041,0.845,18.728-24.935,57.805-24.998c39.076,0.063,50.764,25.843,57.805,24.998c6.125-0.735,10.082-8.567,11.013-10.604 c0.19,4.992,0.259,10.045,0.259,15.084c0,34.006-15.016,55.076-27.612,66.763c-15.872,14.727-33.494,20.072-41.465,20.072 c-7.972,0-25.593-5.345-41.465-20.072c-12.596-11.687-27.612-32.757-27.612-66.763C123.414,93.562,123.483,88.509,123.673,83.517z"></path> <path d="M342.583,298.327c-4.127-25.664-12.624-58.724-29.668-70.474c-11.639-8.024-52.247-29.72-69.588-38.984l-0.293-0.156 c-1.983-1.059-4.402-0.847-6.17,0.541c-9.083,7.131-19.034,11.937-29.574,14.284c-1.862,0.415-3.39,1.738-4.067,3.521 l-5.775,15.223h-9.915l-5.775-15.223c-0.677-1.783-2.205-3.106-4.067-3.521c-10.54-2.347-20.49-7.153-29.574-14.284 c-1.768-1.388-4.188-1.601-6.17-0.541c-17.134,9.156-58.238,31.294-69.831,39.106c-19.62,13.218-28.198,61.053-29.718,70.508 c-0.151,0.938-0.064,1.897,0.253,2.793c0.475,1.341,8.879,23.076,54.839,37.005v4.627c0,2.826,2.293,5.118,5.119,5.118 l63.313,0.052c-1.218,6.975-3.82,18.461-9.032,29.811c-0.729,1.582-0.602,3.427,0.343,4.895c0.941,1.47,2.565,2.355,4.308,2.355 h61.895c1.743,0,3.368-0.886,4.309-2.355c0.94-1.468,1.069-3.313,0.345-4.895c-5.21-11.349-7.818-22.836-9.038-29.811l63.319-0.052 c2.825,0,5.119-2.292,5.119-5.118v-4.627c45.96-13.929,54.364-35.664,54.839-37.005 C342.647,300.224,342.734,299.264,342.583,298.327z M270.889,333.688h-8.946v-1.766c0-2.613-2.119-4.733-4.733-4.733 c-2.615,0-4.732,2.119-4.732,4.733v1.766h-5.971v-1.766c0-2.613-2.117-4.733-4.732-4.733c-2.611,0-4.732,2.119-4.732,4.733v1.766 H114.088v-97.226h156.801V333.688z"></path> <path d="M172.417,291.109c-3.612,0-7.004,1.409-9.553,3.966c-3.48,3.491-4.778,8.6-3.388,13.334 c0.081,0.275,0.301,0.488,0.58,0.559c0.278,0.069,0.573-0.011,0.776-0.214l8.494-8.52c0.51,0.206,1.795,0.912,4.171,3.282 c2.425,2.417,3.116,3.703,3.31,4.148l-8.509,8.535c-0.203,0.203-0.283,0.499-0.211,0.776c0.072,0.278,0.285,0.498,0.561,0.578 c1.225,0.356,2.494,0.536,3.773,0.536c3.611,0,7.003-1.408,9.551-3.965c3.999-4.012,4.936-9.929,2.833-14.844l7.945-7.945 l3.361,3.361l-2.292,2.292c-0.498,0.499-0.773,1.161-0.773,1.866s0.275,1.368,0.773,1.866l16.189,16.189 c0.498,0.498,1.161,0.773,1.866,0.773c0.705,0,1.368-0.275,1.867-0.773l8.77-8.77c0.499-0.499,0.773-1.162,0.773-1.867 c0-0.705-0.275-1.368-0.773-1.867l-16.188-16.189c-0.5-0.498-1.163-0.773-1.868-0.773c-0.705,0-1.367,0.275-1.866,0.773 l-2.292,2.292l-3.361-3.361l10.304-10.304c1.661,0.714,3.463,1.096,5.325,1.096c3.612,0,7.004-1.408,9.553-3.965 c3.479-3.491,4.778-8.6,3.39-13.335c-0.081-0.276-0.301-0.488-0.579-0.559c-0.278-0.071-0.573,0.011-0.776,0.214l-8.496,8.522 c-0.51-0.207-1.794-0.912-4.171-3.282c-2.425-2.418-3.116-3.704-3.31-4.149l8.509-8.535c0.203-0.203,0.283-0.499,0.211-0.776 c-0.072-0.278-0.285-0.498-0.561-0.578c-1.225-0.355-2.494-0.536-3.771-0.536c-3.612,0-7.004,1.409-9.552,3.966 c-3.999,4.012-4.936,9.929-2.833,14.844l-10.31,10.31l-10.555-10.556c-0.008-0.014-0.009-0.031-0.017-0.045l-4.821-8.266 c-0.083-0.143-0.197-0.265-0.332-0.359l-8.134-5.643c-0.451-0.313-1.058-0.257-1.444,0.129l-3.623,3.623 c-0.387,0.387-0.441,0.995-0.129,1.445l5.645,8.133c0.094,0.135,0.217,0.249,0.359,0.332l8.264,4.82 c0.016,0.009,0.033,0.012,0.049,0.021l10.552,10.553l-7.939,7.939C176.081,291.491,174.279,291.109,172.417,291.109z M199.577,298.674c0.577-0.576,1.513-0.576,2.088,0.001l10.388,10.387c0.576,0.577,0.577,1.512,0,2.089 c-0.577,0.576-1.513,0.576-2.089,0l-10.387-10.387C198.999,300.186,198.999,299.251,199.577,298.674z M204.276,293.976 c0.577-0.578,1.512-0.578,2.09,0l10.386,10.386c0.577,0.576,0.577,1.512,0,2.089c-0.575,0.576-1.512,0.576-2.089-0.001 l-10.387-10.385C203.7,295.486,203.7,294.552,204.276,293.976z"></path> </g> </g></svg>', 
      title: 'Reparación de Hardware',
      description: 'Solucionamos problemas técnicos en componentes dañados o que necesitan reemplazo.'
    },
    {
      icon: '<svg width="64px" height="64px" viewBox="0 0 1024 1024" fill="#FF6600" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1015.848 687.82H8.156a7.992 7.992 0 0 1-7.998-7.996 7.994 7.994 0 0 1 7.998-7.998h1007.692a7.992 7.992 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.996zM512 767.766c-17.644 0-31.99-14.34-31.99-31.99s14.346-31.99 31.99-31.99c17.652 0 31.992 14.34 31.992 31.99s-14.34 31.99-31.992 31.99z m0-47.984c-8.818 0-15.996 7.184-15.996 15.994s7.178 15.994 15.996 15.994c8.816 0 15.996-7.184 15.996-15.994s-7.18-15.994-15.996-15.994zM376.136 975.732a8.01 8.01 0 0 1-7.818-9.73l31.99-143.956c0.968-4.312 5.294-6.984 9.544-6.078a8.014 8.014 0 0 1 6.078 9.544l-31.99 143.956a8 8 0 0 1-7.804 6.264zM647.864 975.732a8 8 0 0 1-7.808-6.264l-31.988-143.956a8.01 8.01 0 0 1 6.074-9.544c4.296-0.906 8.574 1.766 9.542 6.078l31.992 143.956a8.008 8.008 0 0 1-7.812 9.73z" fill=""></path><path d="M671.954 975.732H352.05a7.992 7.992 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h319.904a7.992 7.992 0 0 1 7.996 7.996 7.992 7.992 0 0 1-7.996 7.998zM967.86 639.836H56.14a7.994 7.994 0 0 1-7.998-7.998V104a7.994 7.994 0 0 1 7.998-7.998h911.72c4.422 0 8 3.578 8 7.998v527.838a7.994 7.994 0 0 1-8 7.998zM64.138 623.84h895.726V111.998H64.138V623.84z" fill=""></path><path d="M967.86 143.988H56.14a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h911.72c4.422 0 8 3.578 8 7.998a7.994 7.994 0 0 1-8 7.998z" fill=""></path><path d="M88.606 127.992c-4.412 0-8.076-3.576-8.076-7.998s3.5-7.998 7.92-7.998h0.156c4.42 0 7.998 3.576 7.998 7.998s-3.578 7.998-7.998 7.998zM120.12 143.988a7.994 7.994 0 0 1-7.998-7.998V104a7.994 7.994 0 0 1 7.998-7.998A7.994 7.994 0 0 1 128.118 104v31.99a7.992 7.992 0 0 1-7.998 7.998zM184.1 143.988a7.994 7.994 0 0 1-7.998-7.998V104c0-4.42 3.578-7.998 7.998-7.998S192.098 99.58 192.098 104v31.99a7.994 7.994 0 0 1-7.998 7.998zM248.082 143.988a7.994 7.994 0 0 1-7.998-7.998V104c0-4.42 3.578-7.998 7.998-7.998S256.08 99.58 256.08 104v31.99a7.994 7.994 0 0 1-7.998 7.998zM312.062 143.988a7.994 7.994 0 0 1-7.998-7.998V104c0-4.42 3.578-7.998 7.998-7.998S320.06 99.58 320.06 104v31.99a7.994 7.994 0 0 1-7.998 7.998zM376.042 143.988a7.994 7.994 0 0 1-7.998-7.998V104a7.994 7.994 0 0 1 7.998-7.998A7.994 7.994 0 0 1 384.04 104v31.99a7.994 7.994 0 0 1-7.998 7.998zM935.872 143.988c-4.422 0-8-3.578-8-7.998V104a7.994 7.994 0 0 1 8-7.998A7.994 7.994 0 0 1 943.868 104v31.99a7.992 7.992 0 0 1-7.996 7.998zM903.878 143.988a7.994 7.994 0 0 1-7.996-7.998V104a7.994 7.994 0 0 1 7.996-7.998c4.422 0 8 3.578 8 7.998v31.99a7.994 7.994 0 0 1-8 7.998zM855.894 143.988a7.992 7.992 0 0 1-7.996-7.998V104c0-4.42 3.574-7.998 7.996-7.998s7.996 3.578 7.996 7.998v31.99a7.99 7.99 0 0 1-7.996 7.998zM823.906 143.988c-4.422 0-8-3.578-8-7.998V104a7.994 7.994 0 0 1 8-7.998A7.994 7.994 0 0 1 831.902 104v31.99a7.992 7.992 0 0 1-7.996 7.998zM791.914 143.988a7.992 7.992 0 0 1-7.996-7.998V104c0-4.42 3.574-7.998 7.996-7.998s7.996 3.578 7.996 7.998v31.99a7.99 7.99 0 0 1-7.996 7.998zM759.926 143.988c-4.422 0-8-3.578-8-7.998V104a7.994 7.994 0 0 1 8-7.998A7.994 7.994 0 0 1 767.922 104v31.99a7.992 7.992 0 0 1-7.996 7.998zM727.934 143.988a7.992 7.992 0 0 1-7.996-7.998V104c0-4.42 3.574-7.998 7.996-7.998s8 3.578 8 7.998v31.99a7.994 7.994 0 0 1-8 7.998z" fill=""></path><path d="M384.04 575.856h-79.976a7.994 7.994 0 0 1-7.998-7.998v-79.974a7.994 7.994 0 0 1 7.998-7.998h79.976a7.994 7.994 0 0 1 7.998 7.998v79.974a7.994 7.994 0 0 1-7.998 7.998z m-71.978-15.996h63.98v-63.98h-63.98v63.98zM608.286 575.856h-80.288a8.004 8.004 0 0 1-7.156-11.574l39.988-79.976c2.718-5.42 11.59-5.42 14.308 0l39.114 78.21a7.954 7.954 0 0 1 2.032 5.342 7.996 7.996 0 0 1-7.998 7.998z m-67.356-15.996h54.11l-27.054-54.092-27.056 54.092zM703.942 575.856h-47.984a7.998 7.998 0 0 1-7.844-6.436l-15.992-79.968a8 8 0 0 1 7.84-9.568h79.976a8.006 8.006 0 0 1 7.84 9.568l-15.996 79.968a7.994 7.994 0 0 1-7.84 6.436z m-41.426-15.996h34.868l12.808-63.98h-60.484l12.808 63.98zM456.016 575.856c-12.816 0-24.86-4.998-33.926-14.058-9.068-9.058-14.058-21.118-14.058-33.926 0-12.816 4.99-24.868 14.058-33.928 18.134-18.134 49.718-18.134 67.854 0 9.068 9.06 14.058 21.112 14.058 33.928a47.66 47.66 0 0 1-14.058 33.926c-9.068 9.06-21.11 14.058-33.928 14.058z m0-79.976c-8.542 0-16.572 3.328-22.618 9.372s-9.372 14.074-9.372 22.62a31.78 31.78 0 0 0 9.372 22.618c12.09 12.09 33.146 12.09 45.236 0a31.774 31.774 0 0 0 9.372-22.618c0-8.544-3.326-16.574-9.372-22.62s-14.072-9.372-22.618-9.372z" fill=""></path><path d="M767.922 607.846H256.08a8 8 0 0 1-7.052-4.216 8.02 8.02 0 0 1 0.398-8.216l31.99-47.986a8.02 8.02 0 0 1 6.654-3.56h15.994a7.994 7.994 0 0 1 7.998 7.998v7.996h63.98v-7.996a7.992 7.992 0 0 1 7.998-7.998h40.206c2.5 0 4.858 1.172 6.374 3.154 1.234 1.656 1.93 2.624 2.782 3.468 12.09 12.09 33.146 12.09 45.236 0 0.852-0.844 1.546-1.812 2.256-2.75 1.506-2.014 4.382-3.874 6.896-3.874h40.208a7.992 7.992 0 0 1 7.996 7.998v7.996h63.98v-7.996a7.994 7.994 0 0 1 8-7.998h44.782a7.994 7.994 0 0 1 7.84 6.436l1.922 9.558h34.868l1.918-9.558a7.998 7.998 0 0 1 7.844-6.436h28.79c2.668 0 5.168 1.344 6.652 3.56l31.988 47.986a8.072 8.072 0 0 1 0.406 8.216 8.036 8.036 0 0 1-7.062 4.218z m-496.902-15.994h481.968l-21.336-31.992h-17.964l-1.906 9.56a7.994 7.994 0 0 1-7.84 6.436h-47.984a7.998 7.998 0 0 1-7.844-6.436l-1.902-9.56h-30.242v7.998a7.994 7.994 0 0 1-7.996 7.998h-79.976c-4.422 0-8-3.578-8-7.998v-7.998h-28.294c-0.586 0.704-1.148 1.328-1.758 1.938-18.134 18.136-49.718 18.136-67.854 0a31.126 31.126 0 0 1-1.758-1.938h-28.296v7.998a7.994 7.994 0 0 1-7.998 7.998h-79.976a7.994 7.994 0 0 1-7.998-7.998v-7.998h-3.718l-21.328 31.992z" fill=""></path><path d="M344.052 367.92h-143.956a7.994 7.994 0 0 1-7.998-7.998v-95.97a7.994 7.994 0 0 1 7.998-7.998h143.956a7.994 7.994 0 0 1 7.998 7.998v95.97a7.994 7.994 0 0 1-7.998 7.998z m-135.96-15.996h127.96v-79.974h-127.96v79.974z" fill=""></path><path d="M280.072 271.95h-79.976a8 8 0 0 1-7.152-11.574l15.994-31.99a8.002 8.002 0 0 1 7.154-4.42h63.98a7.994 7.994 0 0 1 7.998 7.998v31.99a7.994 7.994 0 0 1-7.998 7.996z m-67.034-15.996h59.036v-15.994h-51.04l-7.996 15.994zM328.056 399.91h-111.966a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h111.966a7.994 7.994 0 0 1 7.998 7.998 7.994 7.994 0 0 1-7.998 7.998z" fill=""></path><path d="M583.976 367.92h-143.954a7.994 7.994 0 0 1-7.998-7.998v-95.97a7.994 7.994 0 0 1 7.998-7.998h143.954c4.422 0 8 3.578 8 7.998v95.97a7.994 7.994 0 0 1-8 7.998z m-135.956-15.996h127.96v-79.974h-127.96v79.974z" fill=""></path><path d="M519.996 271.95h-79.974a8 8 0 0 1-7.154-11.574l15.996-31.99a8 8 0 0 1 7.154-4.42h63.98c4.422 0 8 3.578 8 7.998v31.99a7.998 7.998 0 0 1-8.002 7.996z m-67.032-15.996H512v-15.994h-51.04l-7.996 15.994zM567.984 399.91h-111.968a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h111.968a7.994 7.994 0 0 1 7.996 7.998 7.994 7.994 0 0 1-7.996 7.998z" fill=""></path><path d="M823.906 367.92h-143.958a7.992 7.992 0 0 1-7.996-7.998v-95.97a7.992 7.992 0 0 1 7.996-7.998h143.958a7.994 7.994 0 0 1 7.996 7.998v95.97a7.994 7.994 0 0 1-7.996 7.998z m-135.96-15.996h127.96v-79.974h-127.96v79.974z" fill=""></path><path d="M759.926 271.95h-79.976a7.994 7.994 0 0 1-7.156-11.574l15.996-31.99a8.002 8.002 0 0 1 7.156-4.42h63.98a7.994 7.994 0 0 1 7.996 7.998v31.99a7.994 7.994 0 0 1-7.996 7.996z m-67.044-15.996h59.042v-15.994h-51.046l-7.996 15.994zM807.91 399.91h-111.964c-4.422 0-8-3.578-8-7.998a7.994 7.994 0 0 1 8-7.998h111.964a7.992 7.992 0 0 1 7.996 7.998 7.992 7.992 0 0 1-7.996 7.998z" fill=""></path><path d="M967.86 800.038H56.14c-30.866 0-55.982-25.118-55.982-55.982V104.25c0-30.866 25.118-55.982 55.982-55.982h911.72c30.868 0 55.984 25.118 55.984 55.982v639.804c0 30.866-25.118 55.984-55.984 55.984zM56.14 64.262c-22.048 0-39.988 17.94-39.988 39.988v639.804c0 22.054 17.94 39.986 39.988 39.986h911.72c22.058 0 39.988-17.932 39.988-39.986V104.25c0-22.048-17.93-39.988-39.988-39.988H56.14z" fill=""></path><path d="M967.86 831.778H56.14c-31.388 0-55.982-24.586-55.982-55.982v-31.99a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v31.99c0 22.43 17.566 39.986 39.988 39.986h911.72c22.434 0 39.988-17.556 39.988-39.986v-31.74a7.994 7.994 0 0 1 8-7.998 7.992 7.992 0 0 1 7.996 7.998v31.74c-0.002 31.396-24.588 55.982-55.986 55.982z" fill=""></path></g></svg>', 
      title: 'Instalación de Sistemas',
      description: 'Instalamos sistemas operativos y programas necesarios para que tu equipo funcione de manera eficiente.'
    },
    {
      icon: '<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="64px" height="64px" fill="#FF6600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#FF6600;} </style> <g> <path class="st0" d="M510.159,392.023l-45.586-57.326V93.61c0-11.662-9.458-21.121-21.121-21.121H68.539 c-11.662,0-21.111,9.458-21.111,21.121v241.087L1.834,392.023C0.64,393.518,0,395.368,0,397.288v25.373 c0,9.311,7.539,16.849,16.841,16.849h478.31c9.302,0,16.849-7.538,16.849-16.849v-25.373 C512,395.368,511.351,393.518,510.159,392.023z M77.219,102.29h357.554v202.607H77.219V102.29z M304.119,419.472h-96.238v-25.478 h96.238V419.472z"></path> <rect x="132.064" y="245.315" class="st0" width="35.41" height="35.41"></rect> <rect x="185.179" y="209.904" class="st0" width="35.41" height="70.821"></rect> <rect x="238.295" y="192.199" class="st0" width="35.41" height="88.526"></rect> <rect x="291.41" y="139.084" class="st0" width="35.41" height="141.642"></rect> <rect x="344.526" y="174.494" class="st0" width="35.41" height="106.231"></rect> </g> </g></svg>', 
      title: 'Optimización de Rendimiento',
      description: 'Ajustamos configuraciones y actualizamos hardware para maximizar el rendimiento de tu equipo.'
    },
    {
      icon: '<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="System / Data"> <path id="Vector" d="M18 12V17C18 18.6569 15.3137 20 12 20C8.68629 20 6 18.6569 6 17V12M18 12V7M18 12C18 13.6569 15.3137 15 12 15C8.68629 15 6 13.6569 6 12M18 7C18 5.34315 15.3137 4 12 4C8.68629 4 6 5.34315 6 7M18 7C18 8.65685 15.3137 10 12 10C8.68629 10 6 8.65685 6 7M6 12V7" stroke="#FF6600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>', 
      title: 'Recuperación de Datos',
      description: 'Recuperamos información valiosa de discos duros dañados o equipos con fallos.'
    },
    {
      icon: '<svg fill="#FF6600" width="64px" height="64px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path></g></svg>',
      title: 'Asesoramiento Personalizado',
      description: 'Ofrecemos consejos técnicos para elegir el mejor hardware y software según tus necesidades.'
    }
  ];

  goContactTitle : string = 'Explora Más Soluciones';
  goContactSecondTitle : string = '¿Tienes algún problema con tu <span hardware o necesitas servicio técnico?';
  goContactParagraph : string = 'Estamos aquí para ayudarte. Contáctanos, pásate por nuestro local o llámanos y resolveremos tus problemas de la manera más rápida y eficiente posible.';

  faqs = [
    {
      question: '¿Qué tipos de problemas de hardware reparan?',
      answer:
        'Reparamos una amplia gama de problemas, incluyendo fallos en discos duros, fuentes de alimentación defectuosas, problemas con placas base, tarjetas gráficas y más.',
      open: true
    },
    {
      question: '¿Hacéis limpieza y mantenimiento preventivo de equipos?',
      answer:
        'Sí, ofrecemos servicios de limpieza interna de componentes para prevenir problemas ocasionados por acumulación de polvo o sobrecalentamiento.',
      open: false
    },
    {
      question: '¿Podéis ayudarme a montar un PC personalizado?',
      answer:
        'Por supuesto, te ayudamos a elegir los componentes y montar un PC a medida según tus necesidades, ya sea para gaming, diseño gráfico o uso general.',
      open: false
    },
    {
      question: '¿Ofrecéis diagnóstico gratuito?',
      answer:
        'Sí, realizamos un diagnóstico inicial gratuito para identificar el problema y darte un presupuesto antes de proceder con cualquier reparación.',
      open: false
    },
    {
      question: '¿Reparáis portátiles además de PCs de sobremesa?',
      answer:
        'Sí, reparamos portátiles, incluyendo problemas con pantallas, teclados, baterías, puertos de carga y otros componentes.',
      open: false
    },
    {
      question: '¿Ofrecéis garantías por las reparaciones realizadas?',
      answer:
        'Sí, todas nuestras reparaciones incluyen garantía, cuya duración dependerá del tipo de servicio realizado.',
      open: false
    },
    {
      question: '¿Podéis recuperar datos de un disco duro dañado?',
      answer:
        'Ofrecemos servicios de recuperación de datos siempre que el daño no sea extremo. Evaluaremos tu caso y te informaremos sobre las posibilidades.',
      open: false
    },
    {
      question: '¿Cuánto tiempo tardáis en reparar un equipo?',
      answer:
        'El tiempo depende del tipo de reparación, pero generalmente entregamos dentro de 24 a 72 horas. Te proporcionaremos un estimado tras evaluar tu equipo.',
      open: false
    },
    {
      question: '¿Qué métodos de pago aceptáis?',
      answer:
        'Aceptamos efectivo, tarjetas de crédito/débito y transferencias bancarias. También podemos ofrecer opciones de pago fraccionado en algunos casos.',
      open: false
    },
    {
      question: '¿Ofrecéis soporte técnico remoto?',
      answer:
        'Sí, podemos resolver ciertos problemas de software de forma remota. Solo necesitas una conexión a Internet estable.',
      open: false
    }
  ];

}
