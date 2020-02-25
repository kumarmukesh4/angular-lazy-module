import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserDetailComponent } from './view-user-detail/view-user-detail.component';

const routes: Routes = [
        {
          path: 'user', component: UserComponent
        },
        {
          path: 'add-user', component: AddUserComponent
        },
        {
          path: 'edit-user', component: EditUserComponent
        },
        {
          path: 'view-user', component: ViewUserDetailComponent
        }
      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
