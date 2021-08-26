import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './admin/pages/users/all-users/all-users.component';
import { SingleUserComponent } from './admin/pages/users/single-user/single-user.component';
import { AddUserComponent } from './admin/pages/users/add-user/add-user.component';
import { RegisterUserComponent } from './site/pages/auth/register-user/register-user.component';
import { LoginUserComponent } from './site/pages/auth/login-user/login-user.component';
import { LoginAdminComponent } from './adminpages/auth/login-admin/login-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    SingleUserComponent,
    AddUserComponent,
    RegisterUserComponent,
    LoginUserComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
