import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetService } from '../forget.service';

@Component({
  selector: 'app-updatapasword',
  templateUrl: './updatapasword.component.html',
  styleUrls: ['./updatapasword.component.scss']
})
export class UpdatapaswordComponent {
constructor(private _Router:Router,private _ForgetService:ForgetService){}
err:string=''
idcode:any=''
reset:FormGroup =new FormGroup({
  email: new FormControl(''),
  newPassword: new FormControl('')
})

getemail(){
    
  this._ForgetService.resetPas(this.reset.value).subscribe({
   next:(res)=>{
    localStorage.setItem('_token',res.token)
    this._Router.navigate(['/login'])
   console.log(res);
   
 
 
   },
   error:(err)=>{
     this.err=err.error.message
     console.log(err.error.message);
     
   },
  })
   
 }


}
