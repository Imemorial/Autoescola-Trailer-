import { Routes } from '@angular/router';
import { payments } from './pages/payments/payments.routes';

export const routes: Routes = [
    {
        path: 'inici',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'serveis',
        loadComponent: () => import('./pages/services/services.component').then((c) => c.ServicesComponent)
    },
    {
        path: 'testos',
        loadComponent: () => import('./pages/testos/testos.component').then((c) => c.TestosComponent)
    },
    {
        path: 'galeria',
        loadComponent: () => import('./pages/gallery/gallery.component').then((c) => c.GalleryComponent)
    },
    {
        path: 'contacte',
        loadComponent: () => import('./pages/contact/contact.component').then((c) => c.ContactComponent)
    },
    {
        path: 'nosaltres',
        loadComponent: () => import('./pages/about-us/about-us.component').then((c) => c.AboutUsComponent)
    },
    {
        path: 'termes',
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
    // {
    //     path: 'pagaments',
    //     loadComponent: () => import('./pages/payments/payments.component').then((c) => c.PaymentsComponent),
    //     children: payments
    // },
    {
        path: 'recuperar',
        loadComponent: () => import('./pages/lost/lost.component').then((c) => c.LostComponent)
    },
    {
        path: '',
        redirectTo: 'inici',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then((c) => c.NotFoundComponent)
    }
];
