import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'inicio',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'diseno-web',
        loadComponent: () => import('./pages/website-design/website-design.component').then((c) => c.WebsiteDesignComponent)
    },
    {
        path: 'software',
        loadComponent: () => import('./pages/software/software.component').then((c) => c.SoftwareComponent)
    },
    {
        path: 'comercio-electronico',
        loadComponent: () => import('./pages/ecommerce/ecommerce.component').then((c) => c.EcommerceComponent)
    },
    {
        path: 'redes-sociales',
        loadComponent: () => import('./pages/social-media/social-media.component').then((c) => c.SocialMediaComponent)
    },
    {
        path: 'camaras',
        loadComponent: () => import('./pages/cameras/cameras.component').then((c) => c.CamerasComponent)
    },
    {
        path: 'servicio-tecnico',
        loadComponent: () => import('./pages/technical-service/technical-service.component').then((c) => c.TechnicalServiceComponent)
    },
    {
        path: 'ia',
        loadComponent: () => import('./pages/ia/ia.component').then((c) => c.IaComponent)
    },
    {
        path: 'contacto',
        loadComponent: () => import('./pages/contact/contact.component').then((c) => c.ContactComponent)
    },
    {
        path: 'nosotros',
        loadComponent: () => import('./pages/about-us/about-us.component').then((c) => c.AboutUsComponent)
    },
    {
        path: 'terminos',
        loadComponent: () => import('./pages/terms/terms.component').then((c) => c.TermsComponent)
    },
    {
        path: 'politica',
        loadComponent: () => import('./pages/policity/policity.component').then((c) => c.PolicityComponent)
    },
    {
        path: 'cookies',
        loadComponent: () => import('./pages/cookies/cookies.component').then((c) => c.CookiesComponent)
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    }
];
