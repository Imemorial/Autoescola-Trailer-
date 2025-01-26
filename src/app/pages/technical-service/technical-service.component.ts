import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-technical-service',
  standalone: true,
  imports: [TopComponent, AboutComponent],
  templateUrl: './technical-service.component.html',
  styleUrl: './technical-service.component.scss'
})
export class TechnicalServiceComponent {

}
