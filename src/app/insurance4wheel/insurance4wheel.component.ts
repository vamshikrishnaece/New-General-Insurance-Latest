import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-insurance4wheel',
  templateUrl: './insurance4wheel.component.html',
  styleUrls: ['./insurance4wheel.component.css']
})
export class Insurance4wheelComponent implements OnInit {

  constructor() { }

  carForm=new FormGroup(
    {
      car:new FormControl("",[Validators.required]),
      //bike:new FormControl("",[Validators.required])
      age:new FormControl("",[Validators.required]),
    }
  );

  carinfo()
  {
    console.log(this.carForm.value)
  }
  get Ageget()
  {
    return this.carForm.get("age")
  }
  get carget()
  {
    return this.carForm.get("car")
  }

  ngOnInit(): void {
  }

}
