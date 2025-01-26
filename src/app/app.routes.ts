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
        path: 'software',
        loadComponent: () => import('./pages/software/software.component').then((c) => c.SoftwareComponent)
    },
    {
        path: 'ecommerce',
        loadComponent: () => import('./pages/ecommerce/ecommerce.component').then((c) => c.EcommerceComponent)
    },
    {
        path: 'social',
        loadComponent: () => import('./pages/social-media/social-media.component').then((c) => c.SocialMediaComponent)
    },
    {
        path: 'technicalService',
        loadComponent: () => import('./pages/technical-service/technical-service.component').then((c) => c.TechnicalServiceComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then((c) => c.ContactComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
