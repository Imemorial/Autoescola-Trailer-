import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';

@Component({
  selector: 'app-technical-service',
  standalone: true,
  imports: [TopComponent],
  templateUrl: './technical-service.component.html',
  styleUrl: './technical-service.component.scss'
})
export class TechnicalServiceComponent {

}
