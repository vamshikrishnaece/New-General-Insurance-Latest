import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotForm!:FormGroup;
  submitted =false;
  public sitekey:any;
  constructor(private formBuilder: FormBuilder) { }
  title='recaptcha';
  ngOnInit(): void {
    this.ForgotForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      recaptcha: new FormControl('',[Validators.required])
    });
    this.sitekey="6Lf9kIQcAAAAAAcywsqbvMIWoYldhKYFjXumwTAN";
  }

  get f() { return this.ForgotForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ForgotForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ForgotForm.value, null, 4));
  }

}
