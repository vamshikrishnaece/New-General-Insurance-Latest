import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policypage',
  templateUrl: './policypage.component.html',
  styleUrls: ['./policypage.component.css']
})
export class PolicypageComponent implements OnInit {

  currDiv : string = '';
  ShowDiv(s : string)
  {
    this.currDiv = s;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
