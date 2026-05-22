import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { TestComponent } from './components/test/test.component';
import { DoTestComponent } from './components/do-test/do-test.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-testos',
  standalone: true,
  imports: [TopComponent, TestComponent, DoTestComponent, NgIf],
  templateUrl: './testos.component.html',
  styleUrl: './testos.component.scss'
})
export class TestosComponent {

  doTest: boolean = false;

  setTest(event: any) {
    this.doTest = event;
  }

}
