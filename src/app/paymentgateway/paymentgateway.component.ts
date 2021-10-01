import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentgateway',
  templateUrl: './paymentgateway.component.html',
  styleUrls: ['./paymentgateway.component.css']
})
export class PaymentgatewayComponent implements OnInit {
  paymentform!:FormGroup;
  submitted=false;
  constructor(private fb:FormBuilder, private route:Router) { }

  ngOnInit(): void {
  this.paymentform=this.fb.group(
{
name:['',[Validators.required]],
cardno:['',[Validators.required  ]],
expirydate:['',[Validators.required]],
securitycode:['',[Validators.required ,Validators.minLength(3)]],

});


  }

  get f()
  {
    return this.paymentform.controls;
  }

  submitform()
  {
    console.log(this.paymentform.value);
    this.route.navigate(['/..'])
  }

  

}
