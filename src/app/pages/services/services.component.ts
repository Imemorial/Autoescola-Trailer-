import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TopComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
