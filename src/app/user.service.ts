import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AdminTable } from './admin-table';
import { ClaimRequestTable } from './claim-request-table';
import { ClaimTable } from './claim-table';
import { InsuranceTable } from './insurance-table';
import { Login } from './login';
import { PolicyTable } from './policy-table';
import { UserTable } from './user-table';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public subject=new Subject<boolean>();
  private url = "http://localhost:5000/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  contactno!:number;

  constructor(public client: HttpClient) { }
  
  Get() : Observable<UserTable[]>
  {
    return this.client.get<UserTable[]>(this.url+"usertables");
  }
  Register(user : UserTable)
  {
    return this.client.post<UserTable>(this.url+"usertables", JSON.stringify(user), this.httpOptions);
  }
  Login(login:Login)
  {
    return this.client.post<Login>(this.url+"usertables"+"/"+login, JSON.stringify(login), this.httpOptions)
  }
  GetUserbyEmail(email : any ) 
  {
    return this.client.get<UserTable>(this.url+"usertables/" + email);
  }
  UpdateUserPassword(id : number, password: string, usertable : UserTable)
  {
    return this.client.put<UserTable>(this.url + "userTables/"+ id +"/" + password, usertable);
  }
  ClaimRequest(claimrequest:ClaimRequestTable)
  {
    return this.client.post<ClaimRequestTable>(this.url+"ClaimRequestTables", JSON.stringify(claimrequest), this.httpOptions)
  }
  GetContact(id:number)
  {
     return this.client.get<UserTable>(this.url + "ClaimRequestTables"+"/"+id);
  }
  BuyInsurance(insurancetable:InsuranceTable)
  {
    return this.client.post<InsuranceTable>(this.url+"InsuranceTables", JSON.stringify(insurancetable), this.httpOptions)
  }
  GetInsuranceData(id:number)
  {
    return this.client.get<InsuranceTable>(this.url + "InsuranceTables"+"/"+id);
  }
  BuyPolicyType(policytable:PolicyTable)
  {
    return this.client.post<PolicyTable>(this.url+"PolicyTables", JSON.stringify(policytable), this.httpOptions)
  }
  GetPolicyTable(id : number)
  {
    return this.client.get<PolicyTable>(this.url + "PolicyTables/"+ id);
  }
  GetPoliciesByUserid(id:number)
  {
    return this.client.get<PolicyTable[]>(this.url + "UserProfile/" + id);
  }
  UpdatePolicyStatus(id : number, status : string, policyform : PolicyTable)
  {
    return this.client.put<PolicyTable>(this.url + "PolicyTables/"+ id +"/" + status, policyform);
  }
  ForgotPassword(email:string)
  {
    return this.client.get<number>(this.url + "Forgot/" + email)
  }
  ContactUs(SenderMail:string, Body:string )
  {
    return this.client.get(this.url + "Forgot/" + SenderMail +"/"+ Body );
  }
  // UpdatePolicyStatus(id : number, status : string)
  // {
  //   return this.client.put<PolicyTable>(this.url + "PolicyTables/"+ id, status);
  // }
  AdminLogin(admintable:AdminTable)
  {
    return this.client.post<AdminTable>(this.url+"AdminTables", JSON.stringify(admintable), this.httpOptions)
  }
  GetClaimRequestDetails()
  {
    return this.client.get<ClaimRequestTable[]>(this.url + "ClaimRequestTables");
  }
  GetClaimRequestDataById(id : number)
  {
    return this.client.get<ClaimRequestTable>(this.url + "ClaimRequestTables"+"/"+id);
  }
  UpdateClaimStatus(id:number, status:string,  claimrequesttable:ClaimRequestTable)
  {
    return this.client.put<ClaimRequestTable>(this.url + "ClaimRequestTables/"+id+"/"+status , claimrequesttable );
  }
  ClaimTableDetails(claimtable:ClaimTable)
  {
    return this.client.post<ClaimTable>(this.url+"ClaimTables", JSON.stringify(claimtable), this.httpOptions)
  }
  GetClaimhistory(id:number)
  {
    return this.client.get<ClaimRequestTable[]>(this.url + "ClaimTables"+"/"+id);
  }
  GetApprovedClaims()
  {
    return this.client.get<ClaimTable[]>(this.url + "ClaimTables");
  }
 
}
