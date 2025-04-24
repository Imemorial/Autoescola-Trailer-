import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-up',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './up.component.html',
  styleUrl: './up.component.scss'
})
export class UpComponent {

  opened : boolean = false;

}
