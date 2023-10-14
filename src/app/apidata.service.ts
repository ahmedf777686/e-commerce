import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor( private _HttpClient:HttpClient) { }

  getallproduct():Observable<any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }


  
  detailsapi(id:any):Observable<any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }


  getallcategories():Observable<any>{
return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }


  details(id:any):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
  }
 
}
