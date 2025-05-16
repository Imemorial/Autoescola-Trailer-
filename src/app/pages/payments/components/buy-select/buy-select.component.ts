import { Component } from '@angular/core';
import { ServicesService } from '../../../../services/services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../../../models/service';
import { NgFor, NgIf } from '@angular/common';
import { PaymentsTopComponent } from '../payments-top/payments-top.component';
import { PaymentsFormComponent } from '../payments-form/payments-form.component';

@Component({
  selector: 'app-buy-select',
  standalone: true,
  imports: [NgFor, PaymentsTopComponent, PaymentsFormComponent, NgIf],
  templateUrl: './buy-select.component.html',
  styleUrl: './buy-select.component.scss'
})
export class BuySelectComponent {

  filteredServices: Service[] = [];
  type !: string;

  menuOpened : boolean = false;

  constructor (private _service : ServicesService,
    private _activatedRoute : ActivatedRoute,
    private _router : Router
  ) {}

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params => {
      const type = params.get('type');
      this.type = type!;

      if (type) {
        this.filteredServices = this._service.getServicesByType(type);

        if(this.filteredServices.length === 0){
          this._router.navigate(['/pagaments']);
        }

      }
    });
  }

  setOpened (opened : boolean){
    this.menuOpened = opened;
  }

}
