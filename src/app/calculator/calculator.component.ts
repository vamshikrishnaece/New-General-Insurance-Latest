import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currDiv: string = '';

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

  status: boolean = false;
  ngOnInit(): void {
  }

  get bike_Model() {
    return this.premium2Form.get("bike_Model");
  }
  get bike_Age() {
    return this.premium2Form.get("bike_Age");
  }
  buttonclick() {
    this.status = true;
  }


  alert2wheeler() {

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.premium2Form.value, null, 4));
  }

  alert4wheeler() {

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.premium4Form.value, null, 4));
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
