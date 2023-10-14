import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetService } from '../forget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
constructor(private _ForgetService:ForgetService,private Router:Router){}
forpas:any
err:string=''
forget:FormGroup=new FormGroup({
  email: new FormControl('',[Validators.email,Validators.required])
})

getemail(email:any){
  
 this._ForgetService.password(email).subscribe({
  next:(res)=>{
   if(res.statusMsg=="success"){
this.Router.navigate(['/code'])
    console.log(res);
   }


  },
  error:(err)=>{
    this.err=err.error.message
    console.log(err.error.message);
    
  },
 })
  
}
}
