import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'citas-gestion',
    loadComponent: () => import('./citas-gestion/citas-gestion.page').then( m => m.CitasGestionPage)
  },
  {
    path: 'citas-config',
    loadComponent: () => import('./citas-config/citas-config.page').then( m => m.CitasConfigPage)
  },
];
