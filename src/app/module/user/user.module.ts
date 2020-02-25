import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { AppMaterialModule } from '../../app-material/app-material.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserDetailComponent } from './view-user-detail/view-user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [UserComponent, AddUserComponent, ViewUserDetailComponent, EditUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    AppMaterialModule
  ]
})
export class UserModule { }
