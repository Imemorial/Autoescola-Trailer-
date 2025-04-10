import { Component } from '@angular/core';
import { TopComponent } from '../../shaders/top/top.component';
import { PaymentsTopComponent } from './components/payments-top/payments-top.component';
import { BuyComponent } from './components/buy/buy.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [TopComponent, PaymentsTopComponent, BuyComponent, RouterOutlet],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {

  

}
