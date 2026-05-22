import { Routes } from '@angular/router';
import { authGuard, loginGuard } from '../../guards/auth.guard';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin.component').then((c) => c.AdminComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'galeria',
        loadComponent: () => import('./gallery-admin/gallery-admin.component').then((c) => c.GalleryAdminComponent)
      },
      {
        path: 'noticies',
        loadComponent: () => import('./news-admin/news-admin.component').then((c) => c.NewsAdminComponent)
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent),
    canActivate: [loginGuard]
  }
];
