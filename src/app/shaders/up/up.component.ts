import { NgClass, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-up',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './up.component.html',
  styleUrl: './up.component.scss'
})
export class UpComponent {

  showScroll: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showScroll = window.scrollY > 200;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
