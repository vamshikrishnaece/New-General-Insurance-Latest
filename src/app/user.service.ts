import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTable } from './user-table';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000/user";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(public client: HttpClient) { }


  Get() : Observable<UserTable[]>
  {
    return this.client.get<UserTable[]>(this.url);
  }

  Register(user : UserTable)
  {
    return this.client.post<UserTable>(this.url, JSON.stringify(user), this.httpOptions);
  }

  // create(product): Observable<Product> {
  //   return this.httpClient.post<Product>(this.apiServer + '/product/', JSON.stringify(product), this.httpOptions)

  GetUserbyEmail(email : string) 
  {
    return this.client.get<UserTable>(this.url + "?email=" + email);
  }
}
