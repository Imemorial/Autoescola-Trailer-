import { Injectable } from '@angular/core';
import { Service } from '../../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

    services: Service[] = [
    { image: '/assets/icons/am.png', title: 'Permis AM', type: 'moto' },
    { image: '/assets/icons/a1.png', title: 'Permis A1', type: 'moto' },
    { image: '/assets/icons/a2.png', title: 'Permis A2', type: 'moto' },
    { image: '/assets/icons/a.png', title: 'Permis A', type: 'moto' },
    { image: '/assets/icons/car.png', title: 'Permis B', type: 'coche' },
    { image: '/assets/icons/be.png', title: 'Permis B+E', type: 'altres' },
    { image: '/assets/icons/c.png', title: 'Permis C', type: 'altres' },
    { image: '/assets/icons/ce.png', title: 'Permis C+E', type: 'altres' },
    { image: '/assets/icons/cap.png', title: 'Permís CAP', type: 'altres' },
    { image: '/assets/icons/adr.png', title: 'Permís ADR', type: 'altres' },
    { image: '/assets/icons/tractor.png', title: 'LVA', type: 'altres' },
  ];

  constructor() { }

  getAllServices () {
    return this.services;
  }

  getServicesByType(type: string): Service[] {
    return this.services.filter(service => service.type === type);
  }

}
