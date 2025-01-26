import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { WorkComponent } from '../../shaders/work/work.component';

@Component({
  selector: 'app-website-design',
  standalone: true,
  imports: [TopComponent, WorkComponent],
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

}
