import { Component } from '@angular/core';
import { ServicesService } from '../../../../services/services/services.service';
import { Service } from '../../../../models/service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [NgFor],
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
