import { CartService } from 'src/app/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent  implements OnInit{
constructor( private _FormBuilder:FormBuilder ,private _CartService:CartService,private _ActivatedRoute:ActivatedRoute){}
id:any
checkout:FormGroup =this._FormBuilder.group({
  details:[''],
  phone:[''],
  city:[''],
})

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((res)=>{
 this.id= res.get('id')
 

  })
}
getform(){
 

  this._CartService.check(this.id,this.checkout.value).subscribe({
    next:(res)=>{
console.log(res.session.url
  );
  window.open(res.session.url)
  

    }
  })
  
}
}
