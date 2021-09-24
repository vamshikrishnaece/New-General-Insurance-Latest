import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-policypage',
  templateUrl: './policypage.component.html',
  styleUrls: ['./policypage.component.css']
})
export class PolicypageComponent implements OnInit {
  buyInsuranceForm!:FormGroup;
  FwheelerForm!:FormGroup;
  TwheelerForm!:FormGroup;
  submitted = false;


  currDiv : string = '';
  ShowDiv(s : string)
  {
    this.currDiv = s;
  }
 constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buyInsuranceForm = this.formBuilder.group({
      manufacturer: ['', [Validators.required]],
      model: ['', [Validators.required]],
      drivingLicence:['', [Validators.required]],
      purchaseDate:['', [Validators.required]],
      registrationNo:['', [Validators.required]],
      engineNo:['', [Validators.required]],
      chassisNo:['', [Validators.required]],
    });

    this.FwheelerForm = this.formBuilder.group({
      Fmanu:['', [Validators.required]],
      carmodel:['', [Validators.required]],
      vechiletype:['4']
    });
    this.TwheelerForm = this.formBuilder.group({
      Tmanu:['', [Validators.required]],
      bikemodel:['', [Validators.required]],
      vechiletype:['2']
    });
    
  }
  get f() { return this.buyInsuranceForm.controls; }
  get ff() { return this.FwheelerForm.controls || this.TwheelerForm.controls ; }
  get fff() { return this.TwheelerForm.controls ; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.buyInsuranceForm.invalid && this.FwheelerForm.invalid && this.TwheelerForm.controls ) {
      return;
    }
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.buyInsuranceForm.value,null,4));
  }


  // onSubmit4(){
  // if (this.FwheelerForm.invalid) {
  //   return;
  // }
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.FwheelerForm.value,null,4));
 
  // }


}
