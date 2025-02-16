import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {


  ngAfterViewInit(): void {
    this.initializeCounters();
  }

  initializeCounters(): void {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter: any) => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      let currentValue = 0;
      
      let intervalTime = target < 500 ? 10 : target < 2500 ? 5 : 2; 

      counter.innerText = "+0"; 

      const interval = setInterval(() => {
        if (currentValue < target) {
          currentValue++;
          counter.innerText = `+${currentValue}`; 
        } else {
          clearInterval(interval);
        }
      }, intervalTime);
    });
  }

}
