import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  @Input() title !: string;
  @Input() description !: string;

  @Input() gridItems !: any [];

  constructor (private _sanitizer : DomSanitizer) {}

  

  getSvg (index : number) {
    return this._sanitizer.bypassSecurityTrustHtml(this.gridItems[index].icon); 
  } 

}
