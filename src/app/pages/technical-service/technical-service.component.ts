import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GoContactComponent } from '../../shaders/go-contact/go-contact.component';

@Component({
  selector: 'app-technical-service',
  standalone: true,
  imports: [TopComponent, AboutComponent, ServicesComponent, GoContactComponent],
  templateUrl: './technical-service.component.html',
  styleUrl: './technical-service.component.scss'
})
export class TechnicalServiceComponent {

}
