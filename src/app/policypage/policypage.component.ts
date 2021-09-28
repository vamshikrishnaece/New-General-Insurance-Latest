import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-policypage',
  templateUrl: './policypage.component.html',
  styleUrls: ['./policypage.component.css']
})
export class PolicypageComponent implements OnInit {
  buyInsuranceForm!:FormGroup;
  FwheelerForm!:FormGroup;
  TwheelerForm!:FormGroup;
  buttonForm !: FormGroup;
  submitted = false;
  buttontouched : boolean = false;
 
 
  currDiv : string = '';
  ShowDiv(s : string)
  {
    this.buttontouched = true;
    this.currDiv = s;
  }
 constructor(private formBuilder: FormBuilder, private route : Router) { }
 
  ngOnInit(): void {
    
    this.FwheelerForm = this.formBuilder.group({
      Fmanu:['', [Validators.required]],
      carmodel:['', [Validators.required]],
      vechiletype:['4'],
      drivingLicence:['', [Validators.required]],
      purchaseDate:['', [Validators.required]],
      registrationNo:['', [Validators.required]],
      engineNo:['', [Validators.required]],
      chassisNo:['', [Validators.required]],
    });
    this.TwheelerForm = this.formBuilder.group({
      Tmanu:['', [Validators.required]],
      bikemodel:['', [Validators.required]],
      vechiletype:['2'],
      drivingLicence:['', [Validators.required]],
      purchaseDate:['', [Validators.required]],
      registrationNo:['', [Validators.required]],
      engineNo:['', [Validators.required]],
      chassisNo:['', [Validators.required]],
    });
  }

  get ff() { return this.FwheelerForm.controls  }
  get f() { return this.TwheelerForm.controls ; }
  
 
 
 
  onSubmit() {
    this.submitted = true;
 
    // stop here if form is invalid
    if (this.TwheelerForm.invalid || this.FwheelerForm.invalid)  {
     
      return;
    }
    else{
      console.log("elsepart");
       this.route.navigateByUrl("buy/type")
      //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.buyInsuranceForm.value,null,4));
    }
    // display form values on success
    
  }
 
 
}
 

