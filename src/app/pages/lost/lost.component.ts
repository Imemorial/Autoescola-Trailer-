import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { ServicesComponent } from './components/services/services.component';

@Component({
  selector: 'app-lost',
  standalone: true,
  imports: [TopComponent ,ServicesComponent],
  templateUrl: './lost.component.html',
  styleUrl: './lost.component.scss'
})
export class LostComponent {

}
