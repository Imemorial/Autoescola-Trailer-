import { Component } from '@angular/core';
import { ServicesService } from '../../../../services/services/services.service';
import { Service } from '../../../../models/service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentsTopComponent } from '../payments-top/payments-top.component';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [PaymentsTopComponent, NgFor, RouterModule],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.scss'
})
export class BuyComponent {

  services !: Service [];

  constructor (private _service : ServicesService) {}

  ngOnInit () {
    this.services = this._service.getAllServices();
  }

}
