import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) { 
   
}
verifyUser(email: string,password: string):Observable<any>{
  return this.http.get('http://localhost:8080/general_insurance/login/verifyuser/'+email+'/'+password,{responseType:'text'});
  
}

}
