import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentsService } from '../../../../services/payments/payments.service';

@Component({
  selector: 'app-payments-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payments-form.component.html',
  styleUrl: './payments-form.component.scss'
})
export class PaymentsFormComponent {
  form: FormGroup;
  @Output() closed = new EventEmitter<void>();

  constructor(
    private _formBuilder: FormBuilder,
    private _paymentsService: PaymentsService
  ) {
    this.form = this._formBuilder.group({
      studentName: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const amount = parseFloat(this.form.value.amount);
      this._paymentsService.checkout(amount);
      this.form.reset();
    }
  }

  close() {
    this.closed.emit();
  }
}
