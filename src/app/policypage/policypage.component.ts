import { DatePipe } from '@angular/common';
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
  age !: number;
  userid!: any;
  appid !: number;
  amount !: number; 
  finalAmount !: number; 
  today = new Date()
  formatteddate !: any;
  pipe = new DatePipe('en-US');
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
  
  calculate2wheeler() {
    if (this.TwheelerForm.value.Manufacturer == "Hero Motocorp")
      this.amount = 50000
    else if (this.TwheelerForm.value.Manufacturer == "Honda Motorcycle and Scooter")
      this.amount = 60000
    else if (this.TwheelerForm.value.Manufacturer == "TVS Motor")
      this.amount = 93000
    else if (this.TwheelerForm.value.Manufacturer == "Bajaj Auto")
      this.amount = 75000
    else if (this.TwheelerForm.value.Manufacturer == "Yamaha Motor")
      this.amount = 70000
    else if (this.TwheelerForm.value.Manufacturer == "Royal Enfield")
      this.amount = 60000
    else if (this.TwheelerForm.value.Manufacturer == "suzuki Motorcycle")
      this.amount = 80000
    else if (this.TwheelerForm.value.Manufacturer == "Mahindra Two Wheeler")
      this.amount = 55000
      this.calculatePremium(this.amount, this.TwheelerForm.value.PurchaseDate);
  }
  
  calculate4wheeler() {
    if (this.FwheelerForm.value.Manufacturer == "Ford")
      this.amount = 500000
    else if (this.FwheelerForm.value.Manufacturer == "Honda")
      this.amount = 350000
    else if (this.FwheelerForm.value.Manufacturer == "Hyundai")
      this.amount = 700000
    else if (this.FwheelerForm.value.Manufacturer == "Mahindra & Mahindra")
      this.amount = 900000
    else if (this.FwheelerForm.value.Manufacturer == "Maruti Suzuki")
      this.amount = 400000
    else if (this.FwheelerForm.value.Manufacturer == "Nissan")
      this.amount = 600000
    else if (this.FwheelerForm.value.Manufacturer == "Renault")
      this.amount = 1000000
    else if (this.FwheelerForm.value.Manufacturer == "Tata Motors")
      this.amount = 650000
    else if (this.FwheelerForm.value.Manufacturer == "Toyota")
      this.amount = 700000
    else if (this.FwheelerForm.value.Manufacturer == "Volkswagen")
      this.amount = 100000
      this.calculatePremium(this.amount, this.FwheelerForm.value.PurchaseDate);
      console.log(this.FwheelerForm.value.PurchaseDate)
  }
  
  calculatePremium(amount: number, buyingDate:Date) {
    this.formatteddate = new Date(buyingDate);
    console.log(this.FwheelerForm.value)
    console.log(this.formatteddate)
    console.log(buyingDate)
    var Difference_In_Time = this.today.getTime() - this.formatteddate.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    this.age = Difference_In_Days / 365;
    console.log(this.age)
    if (this.age < 1) {
      alert(
        "Please Enter valid year, minimum age of vehicle should be 1 year"
      );
    }
    else if (this.age == 1) {
      this.finalAmount = amount * 0.5;
    }
    else if (this.age > 1 && this.age < 3) {
      this.finalAmount = amount * 0.2;
    }
    else if (this.age >= 3 && this.age < 10) {
      this.finalAmount = amount * 0.15;
    }
    else if (this.age >= 10) {
      this.finalAmount = amount * 0.1;
    }
  }
 
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.TwheelerForm.invalid && this.FwheelerForm.invalid) {
      return;
    }
    else {
      if (this.TwheelerForm.valid) {
        this.calculate2wheeler();
        this.TwheelerForm.value.userId = this.userid;
        this.service.BuyInsurance(this.TwheelerForm.value).subscribe(
          (params: Params) => {
            this.appid = params['applicationId']
            this.route.navigateByUrl("buy/" + this.appid + "/" + this.amount);
          }
        )
      }
      else if (this.FwheelerForm.valid) {
        this.calculate4wheeler();
      console.log(this.finalAmount)
        this.FwheelerForm.value.userId = this.userid;
        this.service.BuyInsurance(this.FwheelerForm.value).subscribe(
          (params: Params) => {
            this.appid = params['applicationId']
            this.route.navigateByUrl("buy/" + this.appid + "/" + this.finalAmount);
          }
        )
      }
    }
  }
}
