import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './site/pages/auth/register-user/register-user.component';
import { ProfileComponent } from './site/pages/profile/profile.component';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('src/app/site/pages/auth/auth-user.module').then(m => m.AuthUserModule)},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
