import { Component, OnInit } from '@angular/core';
import { ClaimTable } from '../claim-table';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-claim-table',
  templateUrl: './claim-table.component.html',
  styleUrls: ['./claim-table.component.css']
})
export class ClaimTableComponent implements OnInit {
  approvedClaims!: ClaimTable[];
  constructor(private service: UserService) { }
 
  ngOnInit(): void {
 
    this.service.GetApprovedClaims().subscribe((data) => {
      console.log(data);
      this.approvedClaims = data;
    });
 
  }
  }
