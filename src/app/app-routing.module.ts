import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './module/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'users-home',
    loadChildren: () => import('./module/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'search-user',
    loadChildren: () => import('./module/search-user/search-user.module').then(m => m.SearchUserModule)
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
