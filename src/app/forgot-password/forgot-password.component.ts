import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotForm!:FormGroup;
  submitted =false;
  public sitekey:any;
  show = false;
  message !: string;
  code !: number;

  constructor(private formBuilder: FormBuilder, private service:UserService, private route:Router) { }
  title='recaptcha';
  ngOnInit(): void {
    this.ForgotForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      verificationCode : new FormControl('', [Validators.required])
    });
    this.sitekey="6Lf9kIQcAAAAAAcywsqbvMIWoYldhKYFjXumwTAN";
  }

  get f() { return this.ForgotForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ForgotForm.value.email==null) {
      return;
    }
    else
    {
      this.service.ForgotPassword(this.ForgotForm.value.email).subscribe((data)=>
      {
        this.code=data; 
      });
      this.show = true;
    }

  }

  verify()
  {
    console.log(this.code)
    console.log(this.ForgotForm.value.verificationCode)
    if(this.ForgotForm.value.verificationCode == this.code)
        {
          console.log("Ok");
          this.show = false;
          this.route.navigate([''])
        }
        else
        {
          this.message = "Please enter right code";
          console.log("wrong")
          return;
        }
  }
}
