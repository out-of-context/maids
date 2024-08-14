import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaidsRoutes } from './maids/maids.routes';

const routes: Routes = [
  ...MaidsRoutes,
  {
    path: '**',
    redirectTo: 'Maids/home-page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
