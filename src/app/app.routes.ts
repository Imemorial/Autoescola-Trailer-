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
        path: 'cameras',
        loadComponent: () => import('./pages/cameras/cameras.component').then((c) => c.CamerasComponent)
    },
    {
        path: 'technicalService',
        loadComponent: () => import('./pages/technical-service/technical-service.component').then((c) => c.TechnicalServiceComponent)
    },
    {
        path: 'ia',
        loadComponent: () => import('./pages/ia/ia.component').then((c) => c.IaComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then((c) => c.ContactComponent)
    },
    {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us.component').then((c) => c.AboutUsComponent)
    },
    {
        path: 'terms',
        loadComponent: () => import('./pages/terms/terms.component').then((c) => c.TermsComponent)
    },
    {
        path: 'policy',
        loadComponent: () => import('./pages/policity/policity.component').then((c) => c.PolicityComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
