import { Component, OnInit } from '@angular/core';
import { Params, Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  message = false;
  email !: any;
  admin = false;
  username: string = "";
  user: any;

  constructor(private service: UserService, private router: Router) { }


  ngOnInit(): void {
    this.email = localStorage.getItem('email')
    if (this.email != null) {
      if (this.email == "admin@gmail.com") {
        this.admin = true;
        this.message = false;
      }
      else {
        this.message = true;
        this.admin = false;
      }
    }
    if (this.user === null)
      return;
    else {
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
  logout() {
    localStorage.removeItem('email');
    localStorage.clear();
  }

}
