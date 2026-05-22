import { Component } from '@angular/core';
import { AboutUsInfoComponent } from './about-us-info/about-us-info.component';
import { TopComponent } from '../../shaders/top/top.component';
import { ContactComponent } from '../../shaders/contact/contact.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TopComponent, AboutUsInfoComponent, ContactComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {}
