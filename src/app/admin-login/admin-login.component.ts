import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminloginForm!: FormGroup;
  submitted = false;
  errormsg!:string;
  constructor(private formBuilder: FormBuilder , private service:UserService , private route:Router) { }

  ngOnInit(): void {


    this.adminloginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      Adminpassword: ['', [Validators.required, Validators.minLength(6)]],

    });

  }
  get f() { return this.adminloginForm.controls; }
  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.adminloginForm.invalid) {
      return;
    }
  console.log("onsubmit");
    this.service.AdminLogin(this.adminloginForm.value).subscribe((data)=>
      {
        console.log("subscribe");
        console.log(data);
          localStorage.setItem('email',this.adminloginForm.value.email);
          this.service.subject.next(true);
          this.route.navigateByUrl('adminclaimrequesttable');
          
         
      },
      error=>{this.errormsg="Login Failed";}
      );
    // display form values on success
  }

  onForgot() {
    this.submitted = false;
    this.adminloginForm.reset();
  }


}
