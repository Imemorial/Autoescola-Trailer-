import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { ContactComponent as Contact } from '../../shaders/contact/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [TopComponent, Contact],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
