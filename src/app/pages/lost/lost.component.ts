import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { ServicesComponent } from './components/services/services.component';
import { TypesComponent } from './components/types/types.component';
import { ContactComponent } from '../../shaders/contact/contact.component';

@Component({
  selector: 'app-lost',
  standalone: true,
  imports: [TopComponent, ServicesComponent, TypesComponent, ContactComponent],
  templateUrl: './lost.component.html',
  styleUrl: './lost.component.scss'
})
export class LostComponent {}
