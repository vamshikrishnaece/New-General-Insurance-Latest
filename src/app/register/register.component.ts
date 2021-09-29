import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxValidator, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserTable } from '../user-table';
import { UserService } from '../user.service';
import { MustMatch } from '../_helpers/must-match.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  Phonenumber!: number;
  errormsg!: string;

  constructor(private service: UserService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [3],
      Name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      DOB: ['', [Validators.required]],
      ContactNo: ['', [Validators.required, Validators.minLength(10)]],
      Address: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {

      this.service.Register(this.registerForm.value).subscribe(data => {
        console.log(data);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));


      },
        error => { this.errormsg = "Email Already exists"; }

      )


    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
