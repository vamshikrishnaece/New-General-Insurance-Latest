import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: Router) { }
  message = false;
  email !: any;
  admin = false;

  ngOnInit(): void {
    this.email = localStorage.getItem('email')
    if(this.email!=null)
    {
      if(this.email == "admin@gmail.com")
      {
        this.admin = true;
        this.message = false;
      }
      else
        {
        this.message = true;
        this.admin = false;
      }
    }
  }
  logout()
  {
    localStorage.removeItem('email');
    localStorage.clear();
  }

}
