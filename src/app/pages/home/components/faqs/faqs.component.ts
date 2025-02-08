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
    { question: 'Quins permisos de conduir puc obtenir a Autoescola Tràiler?', answer: 'A la nostra autoescola pots obtenir permisos de conducció com el B, C, C+E, D i permisos especials.', open: false },
    { question: "Com puc inscriure'm als cursos de conducció?", answer: "Pots inscriure’t presencialment a la nostra oficina de Mollerussa o a través de la nostra pàgina web.", open: false },
    { question: 'Quins són els horaris de les classes?', answer: 'Les classes teòriques són de dilluns a divendres en diferents horaris, i les pràctiques s’adapten a la disponibilitat.', open: false },
    { question: "Què necessito per presentar-me a l'examen?", answer: "Has de completar les classes teòriques, superar els tests pràctics i tenir la documentació en regla.", open: false }
  ];

  toggleFaq(index: number) {
    console.log(index)

    this.faqs[index].open = !this.faqs[index].open;
  }

}
