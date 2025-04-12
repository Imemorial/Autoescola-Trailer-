import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about-us-info',
  standalone: true,
  imports: [NgIf],
  templateUrl: './about-us-info.component.html',
  styleUrl: './about-us-info.component.scss'
})
export class AboutUsInfoComponent {

  @Output() stateModal: EventEmitter<boolean> = new EventEmitter<boolean>();
    dropdownOpen: boolean = false;
    
    open() {
      this.stateModal.emit(true);
    }
  
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }

}
