import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { PaymentComponent } from './components/payment/payment.component';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [TopComponent, PaymentComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {

  

}
