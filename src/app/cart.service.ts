import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient:HttpClient) { }

  cartconut:BehaviorSubject<any>= new BehaviorSubject(0)
  token:any={
      token:localStorage.getItem(`_token`)
    }
    addproduct(Id:any):Observable<any>{
      return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: Id
      },{
        headers:this.token
      }
  
  
  
      )
    
}




displaay():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
  {
    headers:this.token
  })
}
remove(id:any):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
  {
    headers:this.token
  })
}


update(id:any,countitem:number):Observable<any>{

  return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
  {
    count: countitem
},
{
  headers:this.token
}
  
  )
}


check(id:any,check:any):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
  
  {
    shippingAddress:  check
    

      
  },{
    headers:this.token
  }
    
      
  )
}



allorders():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/`)
}

cartcart():Observable<any>{
return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{

headers:this.token


})
}
}
 
  





