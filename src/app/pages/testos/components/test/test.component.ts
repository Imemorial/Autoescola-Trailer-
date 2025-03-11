import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgIf],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  @Output() stateModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  dropdownOpen: boolean = false;
  
  open() {
    this.stateModal.emit(true);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
