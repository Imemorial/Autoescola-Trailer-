import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  opened : boolean = false;

  ngOnInit(){
    setTimeout(() => {
      this.opened =! this.opened;
    }, 1500);
  }

}
