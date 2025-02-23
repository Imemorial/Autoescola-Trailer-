import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { TestComponent } from './components/test/test.component';
import { DoTestComponent } from './components/do-test/do-test.component';

@Component({
  selector: 'app-testos',
  standalone: true,
  imports: [TopComponent, TestComponent, DoTestComponent],
  templateUrl: './testos.component.html',
  styleUrl: './testos.component.scss'
})
export class TestosComponent {

  doTest : boolean = false;

}
