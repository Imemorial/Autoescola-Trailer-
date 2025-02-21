import { Component } from '@angular/core';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [SelectComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
