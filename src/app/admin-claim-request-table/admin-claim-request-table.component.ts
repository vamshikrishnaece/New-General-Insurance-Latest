import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Params, Router } from '@angular/router';

import { ClaimRequestTable } from '../claim-request-table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-claim-request-table',
  templateUrl: './admin-claim-request-table.component.html',
  styleUrls: ['./admin-claim-request-table.component.css']
})
export class AdminClaimRequestTableComponent implements OnInit {
  //claimrequestdata!: ClaimRequestTable[];
  claimrequesttabledata!: ClaimRequestTable[];
  //status="";
  //claimrequestform!:FormGroup;
  claimrequestdata!:ClaimRequestTable;
  constructor( private fb:FormBuilder, private service: UserService, private route: Router) { }

  ngOnInit(): void {
 
    this.service.GetClaimRequestDetails().subscribe((params) => {
      console.log(params);
      this.claimrequesttabledata= params;
      console.log(this.claimrequesttabledata);
      
    });


  }


approve(id:number,status:string)
{
  for (let i = 0; i < this.claimrequesttabledata.length; i++) {

  if(this.claimrequesttabledata[i].claimRequestId==id)
  {
    this.claimrequestdata=this.claimrequesttabledata[i];
    
  console.log( this.claimrequestdata)
  }
    
  }



  // this.service.GetClaimRequestDataById(id).subscribe((data)=>
  // {

  //    console.log(data);
  //     this.claimrequestdata=data;
  //     this.claimrequestdata.claimStatus=status;
  // })

  console.log("entered")
  console.log(status)
 
  this.service.UpdateClaimStatus(id,status,this.claimrequestdata).subscribe();
   window.location.reload();
  
 

}



}
