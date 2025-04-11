import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss'
})
export class TopComponent {

 

}
