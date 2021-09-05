import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { AllUsersComponent } from './admin/pages/users/all-users/all-users.component';
import { SingleUserComponent } from './admin/pages/users/single-user/single-user.component';
import { AddUserComponent } from './admin/pages/users/add-user/add-user.component';
import { LoginAdminComponent } from './admin/pages/auth/login-admin/login-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './site/pages/profile/profile.component';
import { UserInterceptor } from './site/interceptors/user.interceptor';
import { RouterModule } from '@angular/router';
import { AllproductComponent } from './products/allproduct/allproduct.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { SingleComponent } from './products/single/single.component';
import { EditComponent } from './products/edit/edit.component';
import { DataTablesModule } from 'angular-datatables';
import { AllcatComponent } from './category/allcat/allcat.component';
import { AddcatComponent } from './category/addcat/addcat.component';
import { EditcatComponent } from './category/editcat/editcat.component';
import { OneComponent } from './category/one/one.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    SingleUserComponent,
    AddUserComponent,
    LoginAdminComponent,
    ProfileComponent,
    AllproductComponent,
    AddproductComponent,
    SingleComponent,
    EditComponent,
    AllcatComponent,
    AddcatComponent,
    EditcatComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
