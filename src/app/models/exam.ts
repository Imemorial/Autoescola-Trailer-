export interface Answer {
    option: string;
    answer: string;
  }
  
  export interface Question {
    number: number;
    img : string;
    question: string;
    answers: Answer[];
    correct_answer: string;
  }
  
  export interface Exam {
    title: string;
    questions: Question[];
  }
  