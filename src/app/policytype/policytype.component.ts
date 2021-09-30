import { DatePipe } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-policytype',
  templateUrl: './policytype.component.html',
  styleUrls: ['./policytype.component.css']
})
export class PolicytypeComponent implements OnInit {
  policyPlanForm!: FormGroup;
  submitted = false;
  appid !: number;
  now = Date.now();
  pipe = new DatePipe('en-US');
  myFormattedDate  = this.pipe.transform(this.now, 'yyyy-MM-dd');

  constructor(private formBuilder: FormBuilder, private activatedroute : ActivatedRoute, 
    private service : UserService, private route : Router) { }

  ngOnInit(): void {
    this.appid = parseInt(this.activatedroute.snapshot.params['appid'])
    this.policyPlanForm = this.formBuilder.group({
      ApplicationID : [this.appid], //cannot convert json obj to system.nullable something
      PolicyType : [],
      Period : [],
      BuyingDate : [this.myFormattedDate],
      InsuranceEstimateAmount : [15000],
      PolicyStatus : ["Active"],
      PaymentAmount : [10000],
      PayStatus : ["No"],
    });
  }
  get f() { return this.policyPlanForm.controls; }

  onSubmit() {
    console.log(this.f.Period.value)
    this.submitted = true;

    // stop here if form is invalid
    if (this.policyPlanForm.invalid) {
      return;
    }
    else
    {
      this.service.BuyPolicyType(this.policyPlanForm.value).subscribe((data)=>
      {
      });
      this.route.navigateByUrl("buy/type/makepayment");
    }

  
  }

}
