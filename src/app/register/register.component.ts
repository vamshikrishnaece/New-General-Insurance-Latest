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
  

  constructor(private service:UserService, private formBuilder: FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      DOB: ['', [Validators.required]],
      Phonenumber: ['', [Validators.required, Validators.minLength(10)]],
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

    var user1 = this.service.GetUserbyEmail(this.f.email.value).subscribe(data=>
      {
        if(data.Email != null)
      {
        this.route.navigateByUrl("/register");
        alert("Email already exists");
      }
      else{
      this.service.Register(this.registerForm.value).subscribe()
      this.route.navigateByUrl("/login");
      }
      });

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
