import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NgIf],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

  @Input () title !: string;
  @Input () parragraph !: string;
  @Input () image !: string;
  @Input () price !: number;

}
