import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserDetailComponent } from './view-user-detail/view-user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [UserComponent, AddUserComponent, ViewUserDetailComponent, EditUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
