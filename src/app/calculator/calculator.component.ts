import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculateForm = new FormGroup({
    twowheeler : new FormControl("Two Wheeler"),
    fourwheeler : new FormControl("Four Wheeler")
  })
  constructor() { }

  status : boolean = false;
  ngOnInit(): void {
  }
  buttonclick()
  {
    this.status = true;
  }

  get twowheeler()
  {
    return this.calculateForm.get("twowheeler");
  }
  get fourwheeler()
  {
    return this.calculateForm.get("fourwheeler");
  }
}
