import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { PolicyTable } from '../policy-table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userpolicies',
  templateUrl: './userpolicies.component.html',
  styleUrls: ['./userpolicies.component.css']
})
export class UserpoliciesComponent implements OnInit {
  user!:any;
  userid!:number;
policies !: PolicyTable[];
  constructor(private service:UserService , private route:Router) { }

  ngOnInit(): void {
    if (this.user === null)
    return;
  else{
  this.user = localStorage.getItem('email')
  
    this.service.GetUserbyEmail(this.user).subscribe((param: Params) => {
      console.log(param)
      this.userid = param['userId'];
      console.log(this.userid);
    this.service.GetPoliciesByUserid(this.userid).subscribe((data)=>{
      this.policies = data;
    })
    }
    )
  }
}

  getpolicies(id : number)
  {
    this.route.navigateByUrl("profile/" + id);
  }
}



  

