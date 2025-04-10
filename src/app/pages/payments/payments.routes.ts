import { Routes } from '@angular/router';

export const payments: Routes = [
    {
        path: 'matriculat',
        loadComponent: () => import('./components/buy/buy.component').then((c) => c.BuyComponent)
    },
    {
        path: 'matriculat/:type',
        loadComponent: () => import('./components/buy-select/buy-select.component').then((c) => c.BuySelectComponent)
    },
    {
        path: '',
        redirectTo: 'matriculat',
        pathMatch: 'full'
    }
];
