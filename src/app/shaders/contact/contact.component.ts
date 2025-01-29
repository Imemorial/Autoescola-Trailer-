import { Component } from '@angular/core';
import { EmailService } from '../../services/email/email.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void <=> *', [
        animate('1s ease-in-out')
      ]),
    ]),
  ],
})
export class ContactComponent {


  form !: FormGroup;
  loading : boolean = false;
  
  success : boolean = false;
  error : boolean = false;

  constructor(private _formBuilder : FormBuilder,
    private _emailService : EmailService
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]], 
      message: ['', Validators.required] ,
      acceptPolicies: [false, Validators.requiredTrue]
    });
  }

 
  sendEmail() {

    this.setLoading(true);

    if (this.form.invalid) {
      console.log('Form is invalid');
      return;
    }

    const emailData = {
      message: this.form.value.message,
      to_name: this.form.value.name,
      to_email: this.form.value.email
    };

    this._emailService.sendEmail(emailData).subscribe({
      next: (response) => {
        this.success = true;
        this.setLoading(false);
      },
      error: (error) => {
        this.error = true;
        this.setLoading(false);
      }
    });
  }

  setLoading (state : boolean){

    if(!state){
      setTimeout(() => {
        this.loading = state;
      }, 250);
    }else
      this.loading = state;
  }

}
