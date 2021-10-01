import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';
import { PolicyTable } from '../policy-table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-claimpage',
  templateUrl: './claimpage.component.html',
  styleUrls: ['./claimpage.component.css']
})
export class ClaimpageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: UserService, private route: Router) { }
  claimForm !: FormGroup;
  submitted = false;
  errormsg!: string;
  now = Date.now();
  pipe = new DatePipe('en-US');
  message!: string;
  policynumbers!: number[];
  user!: any;
  userid!: number;
  allpolicies!: PolicyTable[];
  myFormattedDate = this.pipe.transform(this.now, 'yyyy-MM-dd');

  ngOnInit(): void {
    this.claimForm = this.formBuilder.group({
      PolicyNo: ['', [Validators.required]],
      //ContactNo : new FormControl("", [Validators.required]),
      ClaimStatus: ["Pending"],
      RequestCreatedDate: [this.myFormattedDate],
      Reason: ['', [Validators.required]]
    })
    this.user = localStorage.getItem('email')
    if (this.user != null) {
      this.service.GetUserbyEmail(this.user).subscribe((param: Params) => {
        this.userid = param['userId'];
        this.service.GetPoliciesByUserid(this.userid).subscribe((data) => {
          this.allpolicies = data
        })
      }
      )
    }
  }
  get f() { return this.claimForm.controls; }

  onSubmit() {
    var contact =
      ((document.getElementById("ContactNo") as HTMLInputElement).value);

    this.submitted = true;

    // stop here if form is invalid
    if (this.claimForm.invalid) {
      return;
    }
    this.service.GetContact(this.claimForm.value.PolicyNo).subscribe((data) => {
      if (data[0] != contact) {
        this.message = "Invalid Policy Number or Mobile Number";
      }
      else {
        this.claimForm.value.PolicyNo = parseInt((document.getElementById("PolicyNo") as HTMLInputElement).value);
        this.service.ClaimRequest(this.claimForm.value).subscribe((data) => { },
        

          error => { this.errormsg = "Invalid policy number"; }
        );
        this.route.navigate(['/../claimhistory']);
      }
    },

      error => { this.errormsg = "Invalid policy mobile numer"; }
    );
  }
}