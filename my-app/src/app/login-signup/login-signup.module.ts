import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule,  } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgrtpassComponent } from './forgrtpass/forgrtpass.component';

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent,
  
  },
  {
    path:'signup',
    component:SignupComponent,
  
  },
  {
    path:'forgetpass',
    component:ForgrtpassComponent,
  
  },
  
];
@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgrtpassComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginSignupModule { }
