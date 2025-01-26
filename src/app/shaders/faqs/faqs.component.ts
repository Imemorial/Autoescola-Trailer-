import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {

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
  

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

}
