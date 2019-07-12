import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent,
    pathMatch:"full",
  },
  {
    path:'auth',
    loadChildren:'../app/login-signup/login-signup.module#LoginSignupModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
