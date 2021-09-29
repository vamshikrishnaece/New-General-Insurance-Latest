import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ClaimRequestTable } from './claim-request-table';
import { InsuranceTable } from './insurance-table';
import { Login } from './login';
import { PolicyTable } from './policy-table';
import { UserTable } from './user-table';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public subject=new Subject<boolean>();
  private url = "http://localhost:65113/api/";
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

  ClaimRequest(claimrequest:ClaimRequestTable)
  {
    return this.client.post<ClaimRequestTable>(this.url+"ClaimRequestTables", JSON.stringify(claimrequest), this.httpOptions)
  }

  GetContact(id:number)
  {
     return this.client.get<string>(this.url + "ClaimRequestTables"+"/"+id);
  }
   
  BuyInsurance(insurancetable:InsuranceTable)
  {
    return this.client.post<InsuranceTable>(this.url+"InsuranceTables", JSON.stringify(insurancetable), this.httpOptions)
  }

  BuyPolicyType(policytable:PolicyTable)
  {
    return this.client.post<PolicyTable>(this.url+"PolicyTables", JSON.stringify(policytable), this.httpOptions)
  }

  GetPolicyTable(id : number)
  {
    return this.client.get<PolicyTable>(this.url + "PolicyTables/"+ id);
  }

  UpdatePolicyStatus(id : number, status : string)
  {
    return this.client.put<PolicyTable>(this.url + "PolicyTables/"+ id, status);
  }
}


