import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { ServicesComponent as ServicesComponentsShaders } from '../../shaders/services/services.component';
import { NgFor } from '@angular/common';
import { AboutServicesComponent } from "./components/about-services/about-services.component";
import { StatsComponent } from './components/stats/stats.component';
import { LostComponent } from './components/lost/lost.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TopComponent, NgFor, AboutServicesComponent, ServicesComponentsShaders, StatsComponent, LostComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  

}
