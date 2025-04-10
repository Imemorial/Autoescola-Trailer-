import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {

  faqs = [
    { question: "Quins documents necessito per patricular-me?", answer: 'DNI, NIE i pagament de la matricula', open: false },
    { question: "Com puc inscriure'm?", answer: "Pots inscriure’t presencialment a la nostra oficina de Mollerussa o a través de la nostra pàgina web omplin un formulari.", open: false },
    { question: 'Quins són els nostres horaris?', answer: 'Oficina: de 10:00 a 13:00 i de 16:00 a 20:00', open: false },
    { question: 'Com puc inscriurem al curs intensiu?', answer: "Posa't en contacte amb l'oficina i us informarem de les dates i els horaris.", open: false },
  ];

  toggleFaq(index: number) {
    console.log(index)

    this.faqs[index].open = !this.faqs[index].open;
  }

}
