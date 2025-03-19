import { Component, inject } from '@angular/core';
import { PaymentsService } from '../../../../services/payments/payments.service';

import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  licences = [
    { license: 'Moto', types: [
      {type: "A1 circulació", price: 45, duration: "1h 50min"},
      {type: "A1 pista", price: 30, duration: "50min"},
    ] },
    { license: 'Cotxe', types: [
      {type: "Practica B", price: 30, duration: "45min"},
    ] },
    { license: 'Camió', types: [
      {type: "C1", price: 60, duration: "2h"},
      {type: "C1 + E", price: 80, duration: "2h 30min"},
    ] },
    { license: 'Autobús', types: [
      {type: "D", price: 100, duration: "3h"},
      {type: "D + E", price: 120, duration: "3h 30min"},
    ] },
    { license: 'Motocross', types: [
      {type: "MX1", price: 50, duration: "1h"},
      {type: "MX2", price: 55, duration: "1h 30min"},
    ] },
    { license: 'Camper', types: [
      {type: "B1 camper", price: 35, duration: "1h 15min"},
    ] },
  ];

  actual: number = 0;

  constructor (private _paymentService : PaymentsService) {}   

  select(id: number) {
    this.actual = id;
  }

  pay (amount : number){
    this._paymentService.checkout(amount);
  }

}
