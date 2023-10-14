import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetService  {

  constructor(private _HttpClient:HttpClient) { }


  password(email:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
    {
      email:email
  }
    )
  }
  code(code:any):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,
    {
      resetCode:code
  }
    )
  }



  resetPas(pas:any):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
    
    
   pas
    
    
    )
  }
}
