import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {
  
  buyInsuranceForm!:FormGroup;
  submitted = false;

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
  }
  get f() { return this.buyInsuranceForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.buyInsuranceForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.buyInsuranceForm.value, null, 4));
  }


}
