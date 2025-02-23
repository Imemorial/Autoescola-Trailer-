import { Component } from '@angular/core';
import { TimeFormatPipe } from '../../../../pipes/time-format.pipe';
import { ExamService } from '../../../../services/exam/exam.service';
import { Exam } from '../../../../models/exam';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-do-test',
  standalone: true,
  imports: [TimeFormatPipe, NgFor, NgIf],
  templateUrl: './do-test.component.html',
  styleUrl: './do-test.component.scss'
})
export class DoTestComponent {
 
  exam !: Exam;

  timeLeft: number = 30 * 60;
  interval: any;

  actualQuestion : number = 0;

  constructor (private _examService : ExamService) {}

  ngOnInit() {
    this.startTimer();
    this.readData();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  readData () {
    this._examService.readQuestions().subscribe(
      (data : any) => {
        this.exam = data.exam;
      },
      (error) => {
        console.error('Error al cargar el examen', error);
      }
    );
  }

}
