import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currDiv: string = '';
  price!: number;
  age!: number;
  premiumprice !: number;
  premiumcalculator : boolean = false;
  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }
  calculateForm = new FormGroup({
    twowheeler: new FormControl("Two Wheeler"),
    fourwheeler: new FormControl("Four Wheeler")
  })
  constructor() { }
  premium2Form = new FormGroup({
    bike_Model: new FormControl(),
    bike_Age: new FormControl()
  })
  premium4Form = new FormGroup({
    car_Model: new FormControl(),
    car_Age: new FormControl()
  })
  ngOnInit(): void {
  }
  get bike_Model() {
    return this.premium2Form.get("bike_Model");
  }
  get bike_Age() {
    return this.premium2Form.get("bike_Age");
  }
  calculate2wheeler() {
    if (this.premium2Form.value.bike_Model == "Hero Motocorp")
      this.price = 50000
    else if (this.premium2Form.value.bike_Model == "Honda Motorcycle and Scooter")
      this.price = 60000
    else if (this.premium2Form.value.bike_Model == "TVS Motor")
      this.price = 93000
    else if (this.premium2Form.value.bike_Model == "Bajaj Auto")
      this.price = 75000
    else if (this.premium2Form.value.bike_Model == "Yamaha Motor")
      this.price = 70000
    else if (this.premium2Form.value.bike_Model == "Royal Enfield")
      this.price = 60000
    else if (this.premium2Form.value.bike_Model == "suzuki Motorcycle")
      this.price = 80000
    else if (this.premium2Form.value.bike_Model == "Mahindra Two Wheeler")
      this.price = 55000
      this.calculatePremium(this.price);
  }
  calculate4wheeler() {
    if (this.premium4Form.value.car_Model == "Ford")
      this.price = 500000
    else if (this.premium4Form.value.car_Model == "Honda")
      this.price = 350000
    else if (this.premium4Form.value.car_Model == "Hyundai")
      this.price = 700000
    else if (this.premium4Form.value.car_Model == "Mahindra & Mahindra")
      this.price = 900000
    else if (this.premium4Form.value.car_Model == "Maruti Suzuki")
      this.price = 400000
    else if (this.premium4Form.value.car_Model == "Nissan")
      this.price = 600000
    else if (this.premium4Form.value.car_Model == "Renault")
      this.price = 1000000
    else if (this.premium4Form.value.car_Model == "Tata Motors")
      this.price = 650000
    else if (this.premium4Form.value.car_Model == "Toyota")
      this.price = 700000
    else if (this.premium4Form.value.car_Model == "Volkswagen")
      this.price = 100000
      this.calculatePremium(this.price);
  }
  calculatePremium(price: number) {
    this.age = parseInt((document.getElementById("age") as HTMLInputElement).value);
    if (this.age < 1) {
      alert(
        "Please Enter valid year, minimum age of vehicle should be 1 year"
      );
    }
    else if (this.age == 1) {
      this.premiumprice = this.price * 0.5;
    }
    else if (this.age > 1 && this.age < 3) {
      this.premiumprice = this.price * 0.2;
    }
    else if (this.age >= 3 && this.age < 10) {
      this.premiumprice = this.price * 0.15;
    }
    else if (this.age >= 10) {
      this.premiumprice = this.price * 0.1;
    }
    this.premiumcalculator = true;
  }
  get twowheeler() {
    return this.calculateForm.get("twowheeler");
  }
  get fourwheeler() {
    return this.calculateForm.get("fourwheeler");
  }
  get car_Model() {
    return this.premium4Form.get("car_Model");
  }
  get car_Age() {
    return this.premium4Form.get("car_Age");
  }
}
