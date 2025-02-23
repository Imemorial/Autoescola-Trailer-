import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  @Output() stateModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  open() {
    this.stateModal.emit(true);
  }

}
