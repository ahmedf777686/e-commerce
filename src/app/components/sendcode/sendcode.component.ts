import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetService } from '../forget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendcode',
  templateUrl: './sendcode.component.html',
  styleUrls: ['./sendcode.component.scss']
})
export class SendcodeComponent {
  constructor(private _ForgetService:ForgetService,private Router:Router){}
  forpas:any
  err:string=''
  idcode:any=''
  forget:FormGroup=new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required])
  })
  
  getemail(){
    
   this._ForgetService.code(this.idcode).subscribe({
    next:(res)=>{
     if(res.status== "Success"){
  this.Router.navigate(['/update'])
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
