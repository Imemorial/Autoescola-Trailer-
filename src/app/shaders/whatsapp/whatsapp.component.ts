import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.scss'
})
export class WhatsappComponent {

  isOpened : boolean = false;

  setOpened (state : boolean){
    console.log(state);
    this.isOpened = state;
  }

}
