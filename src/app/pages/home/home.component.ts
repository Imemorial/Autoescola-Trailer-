import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  percents : number [] = [0, -100, -200, -300];
  index : number = 0;

  left() {
    if(this.index > 0) this.index--;
    else this.index = this.percents.length -1;
  }

  right(){
    if(this.index < this.percents.length - 1) this.index++;
    else{
      this.index = 0;
    }

  }

  getActualPercent () {
    return this.percents[this.index];
  }

}
