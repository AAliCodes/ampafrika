import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'meats', 
    loadComponent: () => import('./pages/meats/meats.component').then(m => m.MeatsComponent) 
  },
  { 
    path: 'compounds', 
    loadComponent: () => import('./pages/compounds/compounds.component').then(m => m.CompoundsComponent) 
  },
  { 
    path: 'energy', 
    loadComponent: () => import('./pages/energy/energy.component').then(m => m.EnergyComponent) 
  },
  { 
    path: 'dairy', 
    loadComponent: () => import('./pages/dairy/dairy.component').then(m => m.DairyComponent) 
  },
  { 
    path: 'cart', 
    loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) 
  },
  { path: '**', redirectTo: '' }
];
