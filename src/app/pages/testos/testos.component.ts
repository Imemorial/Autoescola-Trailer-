import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { TestComponent } from './components/test/test.component';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-testos',
  standalone: true,
  imports: [TopComponent, TestComponent, ModalComponent],
  templateUrl: './testos.component.html',
  styleUrl: './testos.component.scss'
})
export class TestosComponent {

}
