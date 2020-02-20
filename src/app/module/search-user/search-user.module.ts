import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchUserRoutingModule } from './search-user-routing.module';
import { SearchUserComponent } from './search-user.component';


@NgModule({
  declarations: [SearchUserComponent],
  imports: [
    CommonModule,
    SearchUserRoutingModule
  ]
})
export class SearchUserModule { }
