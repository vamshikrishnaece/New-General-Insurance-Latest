import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ClaimRequestTable } from './claim-request-table';
import { Login } from './login';
import { UserTable } from './user-table';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public subject=new Subject<boolean>();
  private url = "http://localhost:8603/api/";
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

  // create(product): Observable<Product> {
  //   return this.httpClient.post<Product>(this.apiServer + '/product/', JSON.stringify(product), this.httpOptions)

  GetUserbyEmail(email : string) 
  {
    return this.client.get<UserTable>(this.url+"usertables" + "?email=" + email);
  }
  GetUsernamebyEmail(email : string ) 
  {
    return this.client.get<UserTable>(this.url+"usertables" + "?email=" + email);
  }
  


  ClaimRequest(claimrequest:ClaimRequestTable)
  {
    return this.client.post<ClaimRequestTable>(this.url+"ClaimRequestTables", JSON.stringify(claimrequest), this.httpOptions)
  }
  GetContact(id:number)
  {
     return this.client.get<string>(this.url+  "ClaimRequestTables"+"/"+id);
  }
   

  


}



// GetUserbyContactNo(ContactNo : number)
//   {
//     return this.client.get<UserTable>(this.url + "/usertable?ContactNo="+ContactNo)
//   }

//   GetInsuranceByUserId(UserId:number)
//   {
//     return this.client.get<InsuranceTable>(this.url+"/insurancetable?UserId="+UserId)
//   }

//   GetPolicyByAppId(ApplicationId:number)
//   {
//     return this.client.get<PolicyTable>(this.url+"/policytable?ApplicationId="+ApplicationId)
//   }