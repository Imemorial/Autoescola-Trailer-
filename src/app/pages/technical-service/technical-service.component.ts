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

}
