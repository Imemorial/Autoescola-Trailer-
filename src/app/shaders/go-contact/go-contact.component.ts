import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-go-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './go-contact.component.html',
  styleUrl: './go-contact.component.scss'
})
export class GoContactComponent {

  @Input() goContactTitle !: string;
  @Input() goContactSecondTitle !: string;
  @Input() goContactParagraph !: string;

}
