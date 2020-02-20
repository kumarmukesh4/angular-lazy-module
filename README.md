# angular-lazy-module
Structuring angular app with feature module using Lazy Load feature
# Difference between Feature module & root module
  - Feature module provide cohesive set of cuntionality that help application to partition with focused area. It collaborate with root module and other module through service it provide and component, directive & pipes it share.
  - To view the feature module component, it need to export the component in the export array in feature module
  - Feature module are differ with root module, as feature module don't have 'BrowserModule' import which only imported once in root module
  - Commonn module: It contribute many common directive to app template like ngFor, ngIf
# Creating simple moduel
  - ng generate module SharedModule   <br />
      or <br />
    ng generate module shared --module app.module <br />
    the above command will create the module and make entry into app-module
```
 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CustomerDashboard { }
```
 - Create header, footer, sideNav, directive, pipes etc and import and export same in sharedModule
 - Finally import `SharedModule` in app-module in Import array
 ```
 import { SharedModule } from './shared/shared.module';
 ```
 
 # Creating Feature moduel
    - ng generate module module/user --route user --module app.module
    - Above commond will create user module under module folder, create it's route and make entry of module in app-module
    - Child component will be imported and route accordingly inside route file

```
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

```
