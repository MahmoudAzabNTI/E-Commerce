import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './site/pages/auth/register-user/register-user.component';
import { ProfileComponent } from './site/pages/profile/profile.component';
import { AllproductComponent } from './products/allproduct/allproduct.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { SingleComponent } from './products/single/single.component';
import { EditComponent } from './products/edit/edit.component';
import { AddcatComponent } from './category/addcat/addcat.component';
import { AllcatComponent } from './category/allcat/allcat.component';
import { EditcatComponent } from './category/editcat/editcat.component';
import { OneComponent } from './category/one/one.component';
const routes: Routes = [
  {path: 'auth', loadChildren: () => import('src/app/site/pages/auth/auth-user.module').then(m => m.AuthUserModule)},
  {path: 'profile', component: ProfileComponent},
  {path:'admin',children:[
    {path:'allProduct',component:AllproductComponent,pathMatch:"full"},
    {path:'addProduct',component:AddproductComponent,pathMatch:"full"},
    {path:'product/:id',component:SingleComponent,pathMatch:"full"},
    {path:'editProduct/:id',component:EditComponent,pathMatch:"full"},
    {path:'addcat',component:AddcatComponent,pathMatch:"full"},
    {path:'allcat',component:AllcatComponent,pathMatch:"full"},
    {path:'editcat/:id',component:EditcatComponent,pathMatch:"full"},
    {path:'single/:id',component:OneComponent}
  ]},
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
