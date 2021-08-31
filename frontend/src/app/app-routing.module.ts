import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './site/pages/auth/register-user/register-user.component';
import { ProfileComponent } from './site/pages/profile/profile.component';
import { AllproductComponent } from './products/allproduct/allproduct.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { SingleComponent } from './products/single/single.component';
const routes: Routes = [
  {path: 'auth', loadChildren: () => import('src/app/site/pages/auth/auth-user.module').then(m => m.AuthUserModule)},
  {path: 'profile', component: ProfileComponent},
  {path:'',component:AllproductComponent},
  {path:'addProduct',component:AddproductComponent},
  {path:'product/:id',component:SingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
