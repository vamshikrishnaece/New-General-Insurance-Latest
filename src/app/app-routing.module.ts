import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ClaimpageComponent } from './claimpage/claimpage.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PolicypageComponent } from './policypage/policypage.component';
import { RegisterComponent } from './register/register.component';
import { UserpoliciesComponent } from './userpolicies/userpolicies.component';

const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"register", component : RegisterComponent},
  {path:"login", component : LoginComponent},
  {path:"estimate", component:CalculatorComponent},
  {path:"buy", component:PolicypageComponent},
  {path:"forgot", component:ForgotPasswordComponent},
  {path:"renew", component:PolicypageComponent},
  {path:"claim", component:ClaimpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
