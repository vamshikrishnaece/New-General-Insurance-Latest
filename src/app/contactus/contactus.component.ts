import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {
  contactform!:FormGroup;
  constructor(private fb:FormBuilder, private service:UserService) { }
  
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

  OnSubmit()
  {
    var SenderMail =
    ((document.getElementById("exampleInputEmail1") as HTMLInputElement).value);
    var Body =
    ((document.getElementById("exampleFormControlTextarea1") as HTMLInputElement).value);
    this.service.ContactUs(SenderMail,Body).subscribe()
    console.log(Body)
    console.log(SenderMail)
  } 
}
