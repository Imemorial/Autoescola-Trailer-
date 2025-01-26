import { Component } from '@angular/core';
import { TopComponent } from "./components/top/top.component";
import { SolutionsComponent } from "./components/solutions/solutions.component";
import { GoSolutionsComponent } from "./components/go-solutions/go-solutions.component";
import { CaseStudiesComponent } from "../../shaders/case-studies/case-studies.component";
import { AdvantagesComponent } from "./components/advantages/advantages.component";
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from '../../shaders/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopComponent, SolutionsComponent, GoSolutionsComponent, CaseStudiesComponent, AdvantagesComponent, WorkComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 

}
