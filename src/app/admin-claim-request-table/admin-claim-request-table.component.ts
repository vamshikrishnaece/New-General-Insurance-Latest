import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Params, Router } from '@angular/router';
import { ClaimRequestTable } from '../claim-request-table';
import { ClaimTable } from '../claim-table';
import { PolicyTable } from '../policy-table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-claim-request-table',
  templateUrl: './admin-claim-request-table.component.html',
  styleUrls: ['./admin-claim-request-table.component.css']
})

export class AdminClaimRequestTableComponent implements OnInit {
  claimrequesttabledata!: ClaimRequestTable[];
  claimrequestdata!: ClaimRequestTable;
  claimtable !: ClaimTable;
  claimtableform!: FormGroup;
  temp !: number;
  constructor(private fb: FormBuilder, private service: UserService, private route: Router) {
  }

  ngOnInit(): void {
    this.claimtableform = this.fb.group({
      claimRequestId: [],
      claimAmount: []
    })
    this.service.GetClaimRequestDetails().subscribe((params) => {
      this.claimrequesttabledata = params;
      for (let i = 0; i < this.claimrequesttabledata.length; i++) {
        this.service.GetPolicyTable(this.claimrequesttabledata[i].policyNo).subscribe((data) => {
          //this.claimrequesttabledata[i].claimAmount = data.paymentAmount;
          this.temp= data.paymentAmount
          console.log(this.temp)
          if (this.claimrequesttabledata[i].reason == "Natural Disaster")
            this.claimrequesttabledata[i].claimAmount = this.temp - (this.temp * 0.4)
          else if (this.claimrequesttabledata[i].reason == "Man Made Disaster")
            this.claimrequesttabledata[i].claimAmount = this.temp - (this.temp * 0.3)
          else if (this.claimrequesttabledata[i].reason == "Road Accident")
            this.claimrequesttabledata[i].claimAmount = this.temp - (this.temp * 0.2)
          else if (this.claimrequesttabledata[i].reason == "Theft")
            this.claimrequesttabledata[i].claimAmount = this.temp - (this.temp * 0.1)
          this.claimtableform.value.claimAmount = this.claimrequesttabledata[i].claimAmount;
          console.log(this.claimrequesttabledata)
        })
      }
    });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  buttonclick(id: number, status: string, claimamount: number) {
    console.log(id,status,claimamount)
    for (let i = 0; i < this.claimrequesttabledata.length; i++) {
      if (this.claimrequesttabledata[i].claimRequestId == id) {
        this.claimrequestdata = this.claimrequesttabledata[i];
      }
    }
    var amount =
      ((document.getElementById("amount") as HTMLInputElement).value);
    this.claimrequestdata.claimAmount = parseInt(amount)
    this.service.UpdateClaimStatus(id, status, this.claimrequestdata).subscribe((data) => {
    });
    this.claimtableform.value.claimRequestId = id;
    if(status == "Approved")
      this.service.ClaimTableDetails(this.claimtableform.value).subscribe((data) => {
    });
    else
    {
      console.log(this.claimrequestdata.policyNo)
      this.service.GetContact(this.claimrequestdata.policyNo).subscribe((params:Params)=>{
      this.service.ContactUs(params[0].email, "Your claim with policy number " + this.claimrequestdata.policyNo + 
      " and claim request id " + this.claimrequestdata.claimRequestId + " has been disapproved").subscribe((data)=>{

      })
      })
    }
    this.reloadPage()
  }}