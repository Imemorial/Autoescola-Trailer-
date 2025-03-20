import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'inicio',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'servicios',
        loadComponent: () => import('./pages/services/services.component').then((c) => c.ServicesComponent)
    },
    {
        path: 'testos',
        loadComponent: () => import('./pages/testos/testos.component').then((c) => c.TestosComponent)
    },
    {
        path: 'gallery',
        loadComponent: () => import('./pages/gallery/gallery.component').then((c) => c.GalleryComponent)
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
        path: 'exam',
        loadComponent: () => import('./pages/exam/exam.component').then((c) => c.ExamComponent)
    },
    {
        path: 'pagaments',
        loadComponent: () => import('./pages/payments/payments.component').then((c) => c.PaymentsComponent)
    },
    {
        path: 'recuperar',
        loadComponent: () => import('./pages/lost/lost.component').then((c) => c.LostComponent)
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    }
];
