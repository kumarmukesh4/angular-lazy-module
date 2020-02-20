import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'user', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule) }, { path: 'search-user', loadChildren: () => import('./module/search-user/search-user.module').then(m => m.SearchUserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
