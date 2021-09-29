import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: any;
  username: string ="New User";
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.user === null)
      return;
    else{
    this.user = localStorage.getItem('email')
    if (this.user != null) {
      this.username = this.user;
      this.service.GetUserbyEmail(this.user).subscribe((param: Params) => {
        this.username = param['name'];
      }
      )
    }
  }
  }
}
