import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
user:any;
name!:string;
username!:string;
  constructor(private service:UserService , private router:Router) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('email')
    this.username=this.user;
    this.name=this.username.toString();
console.log(this.username);
console.log(this.name);

    this.service.GetUsernamebyEmail(this.name).subscribe((data)=>{
      console.log(data);
      console.log(data.Name);
    this.name=data.Name;
    console.log(this.name);

    })
  
    if(this.user === null)
      this.router.navigate(['Register']); 
    console.log(this.user);
  }
  

}
