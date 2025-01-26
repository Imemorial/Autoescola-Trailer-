import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

  @Input() steps : any = [];
  @Input () text !: string;

}
