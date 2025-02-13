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

  faqItems = [
    {
      question: 'Quins permisos oferiu per a tràilers?',
      answer: 'Oferim cursos per obtenir el permís de tràiler classe C1 i C.',
      open: false
    },
    {
      question: 'Quines classes de vehicles es poden conduir amb el permís de tràiler?',
      answer: 'Amb el permís de tràiler, pots conduir vehicles que tinguin una massa màxima autoritzada de fins a 3.500 kg i 4.250 kg amb remolc.',
      open: false
    },
    {
      question: 'Es pot fer el curs en línia?',
      answer: 'Sí, oferim cursos teòrics en línia per facilitar la formació des de casa.',
      open: false
    },
    {
      question: 'On es troba la vostra autoescola?',
      answer: 'La nostra autoescola es troba a Mollerussa, a la província de Lleida.',
      open: false
    }
  ];

  toggleAnswer(item: any): void {
    item.open = !item.open;
  }

}
