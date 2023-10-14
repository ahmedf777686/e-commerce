import { AuthService } from './../../serviecs/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
loding:boolean=false
errmess:any=''
constructor(private _AuthService:AuthService, private _Router:Router){}
  registerForm:FormGroup=new FormGroup({
name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
email:new FormControl('',[Validators.required,Validators.email]),
password:new FormControl('',[Validators.required, Validators.pattern(/^\w{6,}$/)]),
rePassword:new FormControl('',[Validators.required, Validators.pattern(/^\w{6,}$/)]),
phone:new FormControl('',Validators.pattern(/^01[0125][0-9]{8}$/)),

  },{validators:this.rematchpassword})

rematchpassword(form:any){

  let password =form.get('password')
  let rePassword =form.get('rePassword')
  if(password?.value == rePassword?.value){
    return null
  }else{
    rePassword?.setErrors({rePassword:'rePassword not match password '})
    return {rePassword:'rePassword not match password '}
  }
}





  dataregister():void{
    this.loding=true
if(this.registerForm.valid){
this._AuthService.registerform(this.registerForm.value).subscribe({
  next:(data)=>{
 
if(data.message=='success')
this._Router.navigate(['/login'])
this.loding=false
  }
  
  
  
  ,error:(err)=>{
  this.errmess=  err.error.message
  this.loding=false

  
  

  }
})
}


  }
  
}
