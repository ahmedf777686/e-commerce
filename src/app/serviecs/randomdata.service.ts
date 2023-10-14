import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomdataService {

  constructor(private _HttpClient:HttpClient) { }
  token:any={
    token:localStorage.getItem(`_token`)
  }
  countwish:BehaviorSubject<any>= new BehaviorSubject(0)
  brands():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands`)
  }
  brandsdetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands/${id}`)
  }

  addwishlist(id:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {
      productId: id
  },
  {
    headers:this.token
  }
    
    )
  }
  displaywish():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
  
  {
    headers:this.token
  }
    
    )
  }
 removewish(id:any):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
  
  {
    headers:this.token
  }
    
    )
  }



  
}
