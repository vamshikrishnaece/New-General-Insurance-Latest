import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-premiumfor4wheeler',
  templateUrl: './premiumfor4wheeler.component.html',
  styleUrls: ['./premiumfor4wheeler.component.css']
})
export class Premiumfor4wheelerComponent implements OnInit {

  constructor() { }
  premium4Form = new FormGroup({
    car_Model : new FormControl(),
    car_Age : new FormControl()
  })
  ngOnInit(): void {
  }
  calculatepremium()
  {
    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.premium4Form.value, null, 4));
  }

  get car_Model()
  {
    return this.premium4Form.get("car_Model");
  }
  get car_Age()
  {
    return this.premium4Form.get("car_Age");
  }
}
