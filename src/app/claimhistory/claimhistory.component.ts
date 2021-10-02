import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ClaimRequestTable } from '../claim-request-table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-claimhistory',
  templateUrl: './claimhistory.component.html',
  styleUrls: ['./claimhistory.component.css']
})
export class ClaimhistoryComponent implements OnInit {

  constructor(private service:UserService, private route:Router) { }
  claimrequesttable!:ClaimRequestTable[];
  user !: any;
  userid !: number;

  ngOnInit(): void {
    this.user = localStorage.getItem('email')
    if (this.user != null) {
      this.service.GetUserbyEmail(this.user).subscribe((param: Params) => {
        this.userid = param['userId'];
        this.service.GetClaimhistory(this.userid).subscribe((data)=>{
          this.claimrequesttable = data;
          console.log(data)
        })
      }
      )
     }
    // this.service.GetClaimhistory()
  }

}
