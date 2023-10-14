import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

cartdata:any=''
  constructor(private _CartService:CartService, private _ToastrService:ToastrService){}

  ngOnInit(): void {
  this._CartService.displaay().subscribe({
    next:(res)=>{
      
      this.cartdata=res.data
    }
  })
    
  }

  remcart(id:any){
this._CartService.remove(id).subscribe((res)=>{
  console.log(res);

  this.cartdata=res.data
  this._ToastrService.success("done remove successfully")
  this._CartService.cartconut.next(res.numOfCartItems)
  console.log(this.cartdata);
  

})
  }

  countsh(id:any,count:number):void{

    if(count >=1){
      this._CartService.update(id,count).subscribe({
        next:(res)=>{
          this.cartdata=res.data
          console.log(res);
          
        }
      })
    }else{
      this._ToastrService.info("The product cannot be reduced by deleting or adding it")
    }

  }


  clearcart(){
    this._CartService.cartcart().subscribe({
      next:(res)=>{
       if(this.cartdata !== null){
        this.cartdata=res
        this._ToastrService.success(`done clear cart successfully ` )
        
        
       }
      }
    })
  }
  
}
