import { AuthService } from './../../serviecs/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loding:boolean=false
  errmess:string=''
  constructor(private _AuthService:AuthService, private _Router:Router){}
    loginform:FormGroup=new FormGroup({
 
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required, Validators.pattern(/^\w{6,}$/)]),
  
    })
    dataregister():void{
      this.loding=true
  if(this.loginform.valid){
  this._AuthService.loginform(this.loginform.value).subscribe({
    next:(data)=>{
   
  if(data.message=='success')
  localStorage.setItem('_token',data.token)
  
  this._Router.navigate(['/home'])
  this.loding=false
    },error:(err)=>{
    this.errmess=  err.error.message
    this.loding=false
  
    
    
  
    }
  })
  }
  
  
    }
    
}
