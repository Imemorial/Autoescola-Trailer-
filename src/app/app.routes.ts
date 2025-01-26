import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'websiteDesign',
        loadComponent: () => import('./pages/website-design/website-design.component').then((c) => c.WebsiteDesignComponent)
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
