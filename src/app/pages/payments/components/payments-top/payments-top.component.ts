import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payments-top',
  standalone: true,
  imports: [NgIf, RouterModule, NgClass],
  templateUrl: './payments-top.component.html',
  styleUrl: './payments-top.component.scss'
})
export class PaymentsTopComponent {

  type: string | null = null;

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.paramMap.subscribe(params => {
      this.type = params.get('type');
    });
  }

}
