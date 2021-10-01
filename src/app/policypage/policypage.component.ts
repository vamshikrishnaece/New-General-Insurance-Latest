import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserTable } from '../user-table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-policypage',
  templateUrl: './policypage.component.html',
  styleUrls: ['./policypage.component.css']
})
export class PolicypageComponent implements OnInit {
  buyInsuranceForm!: FormGroup;
  FwheelerForm!: FormGroup;
  TwheelerForm!: FormGroup;
  buttonForm !: FormGroup;
  submitted = false;
  buttontouched: boolean = false;
  email: any;
  userid!: any;
  appid !: number;


  currDiv: string = '';
  ShowDiv(s: string) {
    this.buttontouched = true;
    this.currDiv = s;
  }
  constructor(private formBuilder: FormBuilder, private route: Router, private service: UserService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email')
    if(this.email==null)
    {
      this.route.navigateByUrl('../login')
    }

    this.service.GetUserbyEmail(this.email).subscribe((params: Params) => {
      this.userid = params.userId;
    });

    this.FwheelerForm = this.formBuilder.group({
      Manufacturer: ['', [Validators.required]],
      Model: ['', [Validators.required]],
      VechicleType: ['4'],
      DrivingLicense: ['', [Validators.required]],
      PurchaseDate: ['', [Validators.required]],
      RegistrationNo: ['', [Validators.required]],
      EngineNo: ['', [Validators.required]],
      ChassisNo: ['', [Validators.required]],
      UserId: []
    });
    this.TwheelerForm = this.formBuilder.group({
      Manufacturer: ['', [Validators.required]],
      Model: ['', [Validators.required]],
      VechicleType: ['2'],
      DrivingLicense: ['', [Validators.required]],
      PurchaseDate: ['', [Validators.required]],
      RegistrationNo: ['', [Validators.required]],
      EngineNo: ['', [Validators.required]],
      ChassisNo: ['', [Validators.required]],
      UserId: new FormControl()
    });


  }

  get ff() { return this.FwheelerForm.controls }
  get f() { return this.TwheelerForm.controls; }




  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.TwheelerForm.invalid && this.FwheelerForm.invalid) {
      return;
    }
    else {
      if (this.TwheelerForm.valid) {
        this.TwheelerForm.value.userId = this.userid;
        this.service.BuyInsurance(this.TwheelerForm.value).subscribe(
          (params: Params) => {
            this.appid = params['applicationId']
            this.route.navigateByUrl("buy/" + this.appid);
          }
        )
      }
      else if (this.FwheelerForm.valid) {
        this.FwheelerForm.value.userId = this.userid;
        this.service.BuyInsurance(this.FwheelerForm.value).subscribe(
          (params: Params) => {
            this.appid = params['applicationId']
            this.route.navigateByUrl("buy/" + this.appid);
          }
        )
      }
    }
  }
}
