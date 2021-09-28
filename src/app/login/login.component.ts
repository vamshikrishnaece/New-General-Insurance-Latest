import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  errormsg!:string;
  

  constructor(private formBuilder: FormBuilder , private service:UserService , private route:Router) { }

  ngOnInit(): void {
    // sessionStorage.removeItem('email');    
    // sessionStorage.clear();    


    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });

  }
  get f() { return this.loginForm.controls; }




  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  
    this.service.Login(this.loginForm.value).subscribe((data)=>
      {
      
         
          //this.route.navigateByUrl("");
          console.log("Success");
          localStorage.setItem('email',this.loginForm.value.email);
         //sessionStorage.setItem('emailname',this.loginForm.controls.email.value);
          this.service.subject.next(true);
          this.route.navigateByUrl('Home');     

      },
      error=>{this.errormsg="Login Failed";}
      );
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }

  onForgot() {
    this.submitted = false;
    this.loginForm.reset();
  }

}



