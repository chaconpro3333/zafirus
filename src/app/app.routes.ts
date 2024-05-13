import { Routes } from '@angular/router';
import { PathPages } from './shared/enums/pages.enum';

export const routes: Routes = [
  {
    path: '',
    redirectTo: PathPages.HOME,
    pathMatch: 'full',
  },
  {
    path: PathPages.HOME,
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: PathPages.HERO_LIST,
    loadComponent: () => import('./pages/hero-list/hero-list.page').then( m => m.HeroListPage)
  },
  {
    path: PathPages.HERO_DETAIL,
    loadComponent: () => import('./pages/hero-detail/hero-detail.page').then( m => m.HeroDetailPage)
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];
