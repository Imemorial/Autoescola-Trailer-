import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [NgClass],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss'
})
export class TopComponent {

  @Input() title !: string;
  @Input() photo !: string;
  @Input() url !: string;

}
