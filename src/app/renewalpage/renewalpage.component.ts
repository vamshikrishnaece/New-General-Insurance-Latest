import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';
import { PolicyTable } from '../policy-table';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-renewalpage',
  templateUrl: './renewalpage.component.html',
  styleUrls: ['./renewalpage.component.css']
})
export class RenewalpageComponent implements OnInit {
  renewalform!: FormGroup;
  message !: string;
  policytable!: PolicyTable;
  formatteddate !: any;
  pipe = new DatePipe('en-US');
  constructor(private fb: FormBuilder, private service: UserService, private route: Router) { }
  today = new Date()
  year !: number;
  text !: string;
  policystatus !: string;
  submitted = false;
  user!:any;
  userid!:number;
  appid!:number;
  estimatedamount!:number;
  allpolicies!:PolicyTable[]
 
  ngOnInit(): void {
 
    // To calculate the time difference of two dates
 
 
    this.renewalform = this.fb.group({
      policyno: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
 
    this.user = localStorage.getItem('email')
    if (this.user != null) {
      this.service.GetUserbyEmail(this.user).subscribe((param: Params) => {
        this.userid = param['userId'];
        this.service.GetPoliciesByUserid(this.userid).subscribe((data) => {
          this.allpolicies = data
          console.log(this.allpolicies);
        })
      }
      )
    }
 
  }
  get f() {
    return this.renewalform.controls;
  }
 
  onSubmit() {
    this.submitted = true;
 
    // stop here if form is invalid
    if (this.renewalform.invalid) {
      return;
    }
 
    var contact = this.f.mobileno.value;
    this.service.GetContact(this.renewalform.value.policyno).subscribe((data) => {
      if (data[0] != contact) {
        this.message = "Invalid Policy Number or Mobile Number";
      }
      else {
        this.service.GetPolicyTable(this.renewalform.value.policyno).subscribe((params) => {
          this.policytable = params
          this.formatteddate = new Date(this.policytable.buyingDate);
          var Difference_In_Time = this.today.getTime() - this.formatteddate.getTime();
          var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
          this.year = Difference_In_Days / 365;
          if (Difference_In_Days > -10) {
            if (this.year > parseInt(this.policytable.period[0])) {
              this.service.UpdatePolicyStatus(this.renewalform.value.policyno, "Expired", this.policytable).subscribe();
              this.route.navigateByUrl("renew/" + this.policytable.applicationId + "/" + this.policytable.insuranceEstimateAmount)
            }
            else {
              this.policystatus = "Your policy is active";
            }
          }
          else {
            this.text = "Your policy is still active. You can't renew it ";
          }
        });
      }
    });
  }
}



// import { DatePipe } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Params, Router } from '@angular/router';
// import { PolicyTable } from '../policy-table';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-renewalpage',
//   templateUrl: './renewalpage.component.html',
//   styleUrls: ['./renewalpage.component.css']
// })

// export class RenewalpageComponent implements OnInit {
//   renewalform!: FormGroup;
//   message !: string;
//   policytable!: PolicyTable;
//   formatteddate !: any;
//   pipe = new DatePipe('en-US');
  
//   constructor(private fb: FormBuilder, private service: UserService, private route: Router) { }
  
//   today = new Date()
//   year !: number;
//   text !: string;
//   policystatus !: string;
//   submitted = false;
  
//   ngOnInit(): void {
//     // To calculate the time difference of two dates
//     this.renewalform = this.fb.group({
//       policyno: ['', [Validators.required]],
//       mobileno: ['', [Validators.required]],
//       email: ['', [Validators.required]]
//     })
//   }
//   get f() {
//     return this.renewalform.controls;
//   }
  
//   onSubmit() {
//     this.submitted = true;
//     // stop here if form is invalid
//     if (this.renewalform.invalid) {
//       return;
//     }
//     var contact = this.f.mobileno.value;
//     this.service.GetContact(this.renewalform.value.policyno).subscribe((data) => {
//       if (data[0] != contact) {
//         this.message = "Invalid Policy Number or Mobile Number";
//       }
//       else {
//         this.service.GetPolicyTable(this.renewalform.value.policyno).subscribe((params) => {
//           this.policytable = params
//           this.formatteddate = new Date(this.policytable.buyingDate);
//           var Difference_In_Time = this.today.getTime() - this.formatteddate.getTime();
//           var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
//           this.year = Difference_In_Days / 365;
//           console.log(this.formatteddate)
//           console.log(this.today)
//           console.log(this.year)
//           console.log(this.policytable.applicationId)
//           console.log(Difference_In_Days)
//           if (Difference_In_Days > -10) {
//             if (this.year > parseInt(this.policytable.period[0])) {
//               this.service.UpdatePolicyStatus(this.renewalform.value.policyno, "Expired", this.policytable).subscribe();
//               this.route.navigateByUrl("renew/" + this.policytable.applicationId)
//             }
//             else {
//               this.policystatus = "Your policy is active";
//             }
//           }
//           else {
//             this.text = "Your policy is still active. You can't renew it ";
//           }
//         });
//       }
//     });
//   }
// }
// // import { DatePipe } from '@angular/common';
// // import { Component, OnInit } from '@angular/core';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { Params, Router } from '@angular/router';
// // import { PolicyTable } from '../policy-table';
// // import { UserService } from '../user.service';
// // @Component({
// //   selector: 'app-renewalpage',
// //   templateUrl: './renewalpage.component.html',
// //   styleUrls: ['./renewalpage.component.css']
// // })
// // export class RenewalpageComponent implements OnInit {
// //   renewalform!: FormGroup;
// //   message !: string;
// //   policytable!: PolicyTable;
// //   appid!: string;
// //   buyingdate !: Date;
// //   formatteddate !: any;
// //   period !: string;
// //   policystatus !: string;
// //   pipe = new DatePipe('en-US');
// //   constructor(private fb: FormBuilder, private service: UserService, private route: Router) { }
// //   today = new Date()
// //   year !: number;
// //   text !: string;
// //   submitted = false;
// //   ngOnInit(): void {
// //     this.submitted = true;
// //     // To calculate the time difference of two dates
// //     this.renewalform = this.fb.group({
// //       policyno: ['', [Validators.required]],
// //       mobileno: ['', [Validators.required]],
// //       email: ['', [Validators.required]]
// //     })
// //   }
// //   get f() {
// //     return this.renewalform.controls;
// //   }
// //   onSubmit() {
// //     // stop here if form is invalid
// //     if (this.renewalform.invalid) {
// //       return;
// //     }
// //     var contact = this.f.mobileno.value;
// //     this.service.GetContact(this.renewalform.value.policyno).subscribe((data) => {
// //       if (data[0] != contact) {
// //         this.message = "Invalid Policy Number or Mobile Number";
// //       }
// //       else {
// //         this.service.GetPolicyTable(this.renewalform.value.policyno).subscribe((params: Params) => {
// //           this.appid = params[0]['applicationId'];
// //           this.buyingdate = (params[0]['buyingDate'])
// //           this.formatteddate = new Date(this.buyingdate);
// //           var Difference_In_Time = this.today.getTime() - this.formatteddate.getTime();
// //           var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
// //           this.year = Difference_In_Days / 365;
// //           this.period = params[0]['period']
// //           console.log(Difference_In_Days)
// //           console.log(this.formatteddate)
// //           console.log(this.period[0])
// //           console.log(this.today)
// //           if (Difference_In_Days < 10 || Difference_In_Days>=10) {
// //             console.log("entered ")
// //             if (this.year > parseInt(this.period[0])) {
// //               this.service.UpdatePolicyStatus(parseInt(this.appid), "Expired").subscribe();
// //               this.route.navigateByUrl("renew/" + this.appid)
// //             }
// //             else {
// //               this.policystatus = "Your policy is active";
// //             }
// //           }
// //           else {
// //             this.text = "Your policy is still active. You can renew it ";
// //           }
// //         });
// //       }
// //     });
// //   }
// // }
