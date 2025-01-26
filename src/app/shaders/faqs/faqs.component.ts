import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {

  @Input() faqs : any = [];
  

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

}
