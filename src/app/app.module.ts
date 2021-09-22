import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Premiumfor4wheelerComponent } from './premiumfor4wheeler/premiumfor4wheeler.component';
import { Premiumfor2wheelerComponent } from './premiumfor2wheeler/premiumfor2wheeler.component';
import { UserpolicydetailsComponent } from './userpolicydetails/userpolicydetails.component';
import { UserpoliciesComponent } from './userpolicies/userpolicies.component';
import { ClaimpageComponent } from './claimpage/claimpage.component';
import { ClaimhistoryComponent } from './claimhistory/claimhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    Premiumfor4wheelerComponent,
    Premiumfor2wheelerComponent,
    UserpolicydetailsComponent,
    UserpoliciesComponent,
    ClaimpageComponent,
    ClaimhistoryComponent
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
