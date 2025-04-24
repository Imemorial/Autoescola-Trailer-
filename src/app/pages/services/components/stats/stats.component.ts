import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

  targets = [30, 5000, 150000];
  animatedValues = [0, 0, 0];
  alreadyAnimated = false;

  @ViewChild('statsSection') statsSection !: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.alreadyAnimated) {
            this.animateCounters();
            this.alreadyAnimated = true;
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.3 } 
    );

    if (this.statsSection?.nativeElement) {
      observer.observe(this.statsSection.nativeElement);
    }
  }

  animateCounters(): void {
    const duration = 2000;
    const frameRate = 10;
    const steps = duration / frameRate;
    const stepValues = Array(steps).fill(0).map((_, step) => step / steps); 
  
    let currentStep = 0;
  
    const interval = setInterval(() => {
      if (currentStep >= steps) {
        this.animatedValues = [...this.targets];
        clearInterval(interval);
        return;
      }
  
      this.animatedValues = this.targets.map(target =>
        Math.floor(target * stepValues[currentStep])
      );
  
      currentStep++;
    }, frameRate);
  }

}
