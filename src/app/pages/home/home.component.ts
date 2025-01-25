import { Component } from '@angular/core';
import { TopComponent } from "./components/top/top.component";
import { SolutionsComponent } from "./components/solutions/solutions.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopComponent, SolutionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 

}
