import { Injectable } from '@angular/core';
import { Service } from '../../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

    services: Service[] = [
    { image: '/assets/icons/am.png', title: 'Permis AM' },
    { image: '/assets/icons/a1.png', title: 'Permis A1' },
    { image: '/assets/icons/a2.png', title: 'Permis A2' },
    { image: '/assets/icons/a.png', title: 'Permis A' },
    { image: '/assets/icons/car.png', title: 'Permis B' },
    { image: '/assets/icons/be.png', title: 'Permis B+E' },
    { image: '/assets/icons/c.png', title: 'Permis C' },
    { image: '/assets/icons/ce.png', title: 'Permis C+E' },
    { image: '/assets/icons/cap.png', title: 'Permís CAP' },
    { image: '/assets/icons/adr.png', title: 'Permís ADR' },
    { image: '/assets/icons/tractor.png', title: 'LVA' },
  ];

  constructor() { }

  getAllServices () {
    return this.services;
  }
}
