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
  claimtableform!:FormGroup
  constructor(private fb: FormBuilder, private service: UserService, private route: Router) {}

  ngOnInit(): void {

    this.claimtableform = this.fb.group({
      claimRequestId:[],
      claimAmount:[]
    })

    this.service.GetClaimRequestDetails().subscribe((params) => {

      this.claimrequesttabledata = params;
      for (let i = 0; i < this.claimrequesttabledata.length; i++) {
        this.service.GetPolicyTable(this.claimrequesttabledata[i].policyNo).subscribe((data) => {
          this.claimrequesttabledata[i].claimAmount = data.insuranceEstimateAmount;
        })
      }
    });
  }
  

  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 0);
}

  buttonclick(id: number, status: string, claimamount : number) {
    for (let i = 0; i < this.claimrequesttabledata.length; i++) {

      if (this.claimrequesttabledata[i].claimRequestId == id) {
        this.claimrequestdata = this.claimrequesttabledata[i];
      }
    }

    this.service.UpdateClaimStatus(id, status, this.claimrequestdata).subscribe();
    if (status == "Approved") {
      this.claimtableform.value.claimRequestId = id;
      this.claimtableform.value.claimAmount = this.claimrequestdata.claimAmount;
      console.log(this.claimtableform.value)
      this.service.ClaimTableDetails(this.claimtableform.value).subscribe((data) => {
        console.log(data);
      });
      console.log(this.claimtable)

    }

    this.reloadPage();
  }

  //reload page




}
