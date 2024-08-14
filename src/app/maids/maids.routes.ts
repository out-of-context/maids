import { Routes } from '@angular/router';
import { HomePageRoutes } from './views/home-page/home-page.routes';
import { MaidsComponent } from './maids.component';
import { UserViewRoutes } from './views/home-page/user-item/user-item.routes';
export const MaidsRoutes: Routes = [
  {
    path: 'Maids',
    component: MaidsComponent,
    canActivateChild: [],
    children: [...HomePageRoutes, ...UserViewRoutes],
  },
];
