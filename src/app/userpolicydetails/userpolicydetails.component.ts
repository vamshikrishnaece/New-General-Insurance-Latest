import { DatePipe } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceTable } from '../insurance-table';
import { PolicyTable } from '../policy-table';
import { UserTable } from '../user-table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userpolicydetails',
  templateUrl: './userpolicydetails.component.html',
  styleUrls: ['./userpolicydetails.component.css']
})
export class UserpolicydetailsComponent implements OnInit {

  policyNoFromRoute!: number;
  policyTable!: PolicyTable;
  insuranceTable!: InsuranceTable;
  model!: any;
  registrationNumber !: string;
  claimAmount !: number;
  formatteddate !: any;
  pipe = new DatePipe('en-US');
  today = new Date()
  age !: number;
  price !: number;
  premiumprice !: number;


  constructor(private activatedroute: ActivatedRoute, private service: UserService, private route: Router) {
  }

  ngOnInit(): void {
    this.policyNoFromRoute = parseInt(this.activatedroute.snapshot.params['id'])
    console.log(this.policyNoFromRoute)
    this.service.GetPolicyTable(this.policyNoFromRoute).subscribe((data) => {
      this.policyTable = data;
      console.log("Policytable")
      console.log(data)
      this.service.GetInsuranceData(data.applicationId).subscribe((data) => {
        this.insuranceTable = data;
        this.model = data.manufacturer
        this.registrationNumber = data.registrationNo;

        this.formatteddate = new Date(this.policyTable.buyingDate);
        var Difference_In_Time = this.today.getTime() - this.formatteddate.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        this.age = Difference_In_Days / 365;
        if(this.insuranceTable.vechicleType == "2")
            this.calculate2wheeler()
        else
            this.calculate4wheeler()
      })
    })

  }

  calculate2wheeler() {
    console.log("In 2 wheeler")
    if (this.model == "Hero Motocorp")
      this.price = 50000
    else if (this.model == "Honda Motorcycle and Scooter")
      this.price = 60000
    else if (this.model == "TVS Motor")
      this.price = 93000
    else if (this.model == "Bajaj Auto")
      this.price = 75000
    else if (this.model == "Yamaha Motor")
      this.price = 70000
    else if (this.model == "Royal Enfield")
      this.price = 60000
    else if (this.model == "suzuki Motorcycle")
      this.price = 80000
    else if (this.model == "Mahindra Two Wheeler")
      this.price = 55000

    this.calculatePremium(this.price);

  }

  calculate4wheeler() {
    if (this.model == "Ford")
      this.price = 500000
    else if (this.model == "Honda")
      this.price = 350000
    else if (this.model == "Hyundai")
      this.price = 700000
    else if (this.model == "Mahindra & Mahindra")
      this.price = 900000
    else if (this.model == "Maruti Suzuki")
      this.price = 400000
    else if (this.model == "Nissan")
      this.price = 600000
    else if (this.model == "Renault")
      this.price = 1000000
    else if (this.model == "Tata Motors")
      this.price = 650000
    else if (this.model == "Toyota")
      this.price = 700000
    else if (this.model == "Volkswagen")
      this.price = 100000

    this.calculatePremium(this.price);
  }

  calculatePremium(price: number) {
    
    if (this.age < 1) {
      alert(
        "Please Enter valid year, minimum age of vehicle should be 1 year"
      );
    }
    else if (this.age == 1) {
      this.premiumprice = price * 0.5;
    }
    else if (this.age > 1 && this.age < 3) {
      this.premiumprice = price * 0.2;
    }
    else if (this.age >= 3 && this.age < 10) {
      this.premiumprice = price * 0.15;
    }
    else if (this.age >= 10) {
      this.premiumprice = price * 0.1;
    }
  }
}
