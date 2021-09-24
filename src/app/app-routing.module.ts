import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { PolicypageComponent } from './policypage/policypage.component';
import { UserpoliciesComponent } from './userpolicies/userpolicies.component';

const routes: Routes = [
  {path:"", component:UserpoliciesComponent},
  {path:"calculate", component:CalculatorComponent},
  {path:"buy", component:PolicypageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
