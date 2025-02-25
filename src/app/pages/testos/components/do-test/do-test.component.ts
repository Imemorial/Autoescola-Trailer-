import { Component, Output, EventEmitter } from '@angular/core'; // Corrected import
import { TimeFormatPipe } from '../../../../pipes/time-format.pipe';
import { ExamService } from '../../../../services/exam/exam.service';
import { Exam } from '../../../../models/exam';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-do-test',
  standalone: true,
  imports: [TimeFormatPipe, NgFor, NgIf, NgClass],
  templateUrl: './do-test.component.html',
  styleUrl: './do-test.component.scss'
})
export class DoTestComponent {

  exam !: any;
  timeLeft: number = 30 * 60;
  interval: any;
  actualQuestion: number = 0;
  sended: boolean = false;

  @Output() boolEvent = new EventEmitter<boolean>(); 

  constructor(private _examService: ExamService) {}

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

  readData() {
    this._examService.readQuestions().subscribe(
      (data: any) => {
        this.exam = data.exam;
      },
      (error) => {
        console.error('Error al cargar el examen', error);
      }
    );
  }

  sendTest() {
    this.sended = true;
    let correctAnswers = 0;

    if (this.exam && this.exam.questions) {
      this.exam.questions.forEach((question: any) => {
        if (question.selectedAnswer) {
          question.isCorrect = question.selectedAnswer === question.correct_answer;
          if (question.isCorrect) {
            correctAnswers++;
          }
        } else {
          question.isCorrect = false;
        }
      });
    }

    console.log(`Has acertado ${correctAnswers} de ${this.exam.questions.length} preguntas.`);
  }

  selectAnswer(questionIndex: number, selectedOption: string) {
    this.exam.questions[questionIndex].selectedAnswer = selectedOption;
    console.log(this.exam.questions[questionIndex]);
  }

  close() {
    this.boolEvent.emit(false);
  }

}
