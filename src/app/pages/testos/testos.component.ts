import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { TestComponent } from './components/test/test.component';

@Component({
  selector: 'app-testos',
  standalone: true,
  imports: [TopComponent, TestComponent],
  templateUrl: './testos.component.html',
  styleUrl: './testos.component.scss'
})
export class TestosComponent {

}
