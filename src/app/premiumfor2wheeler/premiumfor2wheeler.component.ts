import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-premiumfor2wheeler',
  templateUrl: './premiumfor2wheeler.component.html',
  styleUrls: ['./premiumfor2wheeler.component.css']
})
export class Premiumfor2wheelerComponent implements OnInit {

  constructor() { }
  premium2Form = new FormGroup({
    bike_Model : new FormControl(),
    bike_Age : new FormControl()
  })
  
  ngOnInit(): void {
  }
  calculatepremium()
  {
    console.log("Yo");
    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.premium2Form.value, null, 4));
  }
  get bike_Model()
  {
    return this.premium2Form.get("bike_Model");
  }
  get bike_Age()
  {
    return this.premium2Form.get("bike_Age");
  }
  
}
