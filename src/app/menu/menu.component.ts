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

  ngOnInit(): void {
    this.email = localStorage.getItem('email')
    if(this.email!=null)
    {
      this.message = true
    }
  }
  logout()
  {
    localStorage.removeItem('email');
    localStorage.clear();
  }

}
