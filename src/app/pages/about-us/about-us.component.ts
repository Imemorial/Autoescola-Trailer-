import { Component } from '@angular/core';
import { AboutUsInfoComponent } from './about-us-info/about-us-info.component';
import { TopComponent } from '../../shaders/top/top.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TopComponent, AboutUsInfoComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
