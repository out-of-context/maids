import { Routes } from '@angular/router';
import { UserViewComponent } from './user-item.component';

export const UserViewRoutes: Routes = [
  {
    path: ':id',
    component: UserViewComponent,
  },
];
