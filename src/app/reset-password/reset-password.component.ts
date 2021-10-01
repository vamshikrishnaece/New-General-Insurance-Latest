import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserTable } from '../user-table';
import { UserService } from '../user.service';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
 

  constructor(private formBuilder: FormBuilder , private service:UserService , private route:Router) { }
  submitted = false;
  resetform !: FormGroup
  user !: any;
  errormsg !: string;

  ngOnInit(): void {

    this.resetform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  get f() { return this.resetform.controls; }

  onSubmit()
  {
    this.submitted = true;
    if (this.resetform.invalid) {
      return;
    }
    else {
      this.update();
    }
  }

  update()
  {
    this.service.GetUserbyEmail(this.resetform.value.email).subscribe((data)=>{
      this.user = data;
      this.user.userId = data.userId;
      console.log("HI");
      this.service.UpdateUserPassword(this.user.userId, this.resetform.value.password, this.user).subscribe();
      console.log("Done");
      this.route.navigate(['/../'])
    },
    error=>{this.errormsg = "Invalid email"}
    )

    
  }
}
