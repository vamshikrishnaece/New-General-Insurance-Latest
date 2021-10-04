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
  policytable!: PolicyTable;
  message!: string;
  policynumbers!: number[];
  user!: any;
  text !: string;
  policystatus !: string;
  userid!: number;
  allpolicies!: PolicyTable[];
  myFormattedDate = this.pipe.transform(this.now, 'yyyy-MM-dd');
  today = new Date()
  formatteddate !: any;
  year !: number;

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
          this.allpolicies = data;
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
        this.service.GetPolicyTable(this.claimForm.value.PolicyNo).subscribe((params) => {
          this.policytable = params
          this.formatteddate = new Date(this.policytable.buyingDate);
          var Difference_In_Time = this.today.getTime() - this.formatteddate.getTime();
          var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
          this.year = Difference_In_Days / 365;
            if (this.year > parseInt(this.policytable.period[0])) {
              this.service.UpdatePolicyStatus(this.claimForm.value.PolicyNo, "Expired", this.policytable).subscribe();
              alert("Your policy is expired")
              this.route.navigateByUrl("renew/" + this.policytable.applicationId + "/" + this.policytable.insuranceEstimateAmount) 
            }
          else {
            console.log("Active")
            this.service.ClaimRequest(this.claimForm.value).subscribe(            
            );
            this.route.navigate(['/../claimhistory']);
          }
        });
      }
    });


  }
}