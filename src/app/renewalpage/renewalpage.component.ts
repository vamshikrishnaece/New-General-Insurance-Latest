import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-renewalpage',
  templateUrl: './renewalpage.component.html',
  styleUrls: ['./renewalpage.component.css']
})
export class RenewalpageComponent implements OnInit {
  renewalform!:FormGroup;
  constructor( private fb:FormBuilder) { }

  
  submitted = false;
  ngOnInit(): void {

  this.renewalform=this.fb.group({
  policyno:['',[Validators.required]],
  mobileno:['',[Validators.required]],
  email:['',[Validators.required]]



  })

  }
  get f()
  {
    return this.renewalform.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.renewalform.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.renewalform.value, null, 4));
  }

}
