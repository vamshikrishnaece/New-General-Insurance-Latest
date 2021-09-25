import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ClaimpageComponent } from './claimpage/claimpage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FAQComponent } from './faq/faq.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { PolicypageComponent } from './policypage/policypage.component';
import { PolicytypeComponent } from './policytype/policytype.component';
import { RegisterComponent } from './register/register.component';
import { UserpoliciesComponent } from './userpolicies/userpolicies.component';

const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"register", component : RegisterComponent},
  {path:"login", component : LoginComponent},
  {path:"estimate", component:CalculatorComponent},
  {path:"buy", component:PolicypageComponent},
  {path:"login/forgot", component:ForgotPasswordComponent},
  {path:"renew", component:PolicytypeComponent},
  {path:"claim", component:ClaimpageComponent},
  {path:"contactus", component:ContactusComponent},
  {path:"about", component:AboutusComponent},
  {path:"faq", component:FAQComponent},
  {path:"buy/type", component:PolicytypeComponent},
  {path:"buy/type/makepayment", component:PaymentgatewayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
