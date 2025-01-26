import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'technicalService',
        loadComponent: () => import('./pages/technical-service/technical-service.component').then((c) => c.TechnicalServiceComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
