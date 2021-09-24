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

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    UserpolicydetailsComponent,
    UserpoliciesComponent,
    ClaimpageComponent,
    ClaimhistoryComponent,
    PolicypageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
