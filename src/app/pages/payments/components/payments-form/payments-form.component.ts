import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payments-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ✅ Aquí és clau!
  templateUrl: './payments-form.component.html',
  styleUrl: './payments-form.component.scss'
})
export class PaymentsFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      studentName: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      alert('Pagament registrat correctament!');
      this.form.reset();
    }
  }
}
