import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactform!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactform=this.fb.group({
      name:[],
      email:['',[Validators.required]],
      message:['',[Validators.required]]
  
  
  
     });

  }
  get f()
  {
    return this.contactform.controls;
  }


}

