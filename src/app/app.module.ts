import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserpolicydetailsComponent } from './userpolicydetails/userpolicydetails.component';
import { UserpoliciesComponent } from './userpolicies/userpolicies.component';
import { ClaimpageComponent } from './claimpage/claimpage.component';
import { ClaimhistoryComponent } from './claimhistory/claimhistory.component';
import { PolicypageComponent } from './policypage/policypage.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    UserpolicydetailsComponent,
    UserpoliciesComponent,
    ClaimpageComponent,
    ClaimhistoryComponent,
    PolicypageComponent,
    RegisterComponent,
    MenuComponent,
    LoginComponent,
    HomePageComponent,
    ForgotPasswordComponent,
    BuyInsuranceComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
