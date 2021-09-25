import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-claimpage',
  templateUrl: './claimpage.component.html',
  styleUrls: ['./claimpage.component.css']
})
export class ClaimpageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {  }
  claimForm !: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.claimForm = this.formBuilder.group({
      policynumber: new FormControl("", [Validators.required]),
      mobilenumber : new FormControl("", [Validators.required]),
      reason : []
    })
  }
  get f() { return this.claimForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.claimForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.claimForm.value, null, 4));
  }

}
