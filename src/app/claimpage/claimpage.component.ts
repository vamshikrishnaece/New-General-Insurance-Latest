import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-claimpage',
  templateUrl: './claimpage.component.html',
  styleUrls: ['./claimpage.component.css']
})
export class ClaimpageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder ,private service:UserService , private route:Router) {  }
  claimForm !: FormGroup;
  submitted = false;
  errormsg!:string; 
 now = Date.now();
 pipe = new DatePipe('en-US');
 message!:string;




myFormattedDate  = this.pipe.transform(this.now, 'yyyy-MM-dd');

  ngOnInit(): void {
    this.claimForm = this.formBuilder.group({
      PolicyNo: ['', [Validators.required]],
      //ContactNo : new FormControl("", [Validators.required]),
      ClaimStatus:["Pending"],
      RequestCreatedDate:[this.myFormattedDate], 
      Reason : []
    })
  }
  get f() { return this.claimForm.controls; }
  
  onSubmit() {
    var contact = 
    ((document.getElementById("ContactNo") as HTMLInputElement).value);
    

   // var contact=document.getElementById("ContactNo")?.innerHTML;
   console.log("Helooooooooo");
    console.log(contact);

    this.submitted = true;

     console.log(this.claimForm.value);
    // stop here if form is invalid
    if (this.claimForm.invalid) {
      return;
    }
    
    this.service.ClaimRequest(this.claimForm.value).subscribe((data)=>{
    //console.log(data);

    },

    error=>{this.errormsg="Invalid policy numer";}
    
    
    );

    this.service.GetContact(this.claimForm.value.PolicyNo).subscribe((data)=>{
      console.log("Entered");
    console.log(data[0]);
    if(data[0]!=contact)
    {
        this.message="Invalid Policy Number or Mobile Number";
    }
    else
    {
      this.route.navigate(['Claimhistory']);
    }

    },

    error=>{this.errormsg="Invalid policy mobile numer";}
    
    
    );


    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.claimForm.value, null, 4));
  }

}
