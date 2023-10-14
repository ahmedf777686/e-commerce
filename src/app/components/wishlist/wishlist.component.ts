import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart.service';
import { RandomdataService } from 'src/app/serviecs/randomdata.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{

  datawishlist:any={}
constructor(  private _RandomdataService:RandomdataService, private _CartService:CartService,private _ToastrService:ToastrService){}
backdata:string[]=[]
ngOnInit(): void {
  this._RandomdataService.displaywish().subscribe({

    next:(res)=>{
this.datawishlist=res.data
let newdata= res.data.map((res:any)=>res._id)
this.backdata=newdata
console.log(res.data);

    }
  })
}


addwishlish(id:any){
 

  this._RandomdataService.addwishlist(id).subscribe({
    next:(res)=>{
      this.backdata=res.data
 this._ToastrService.success(res.message)

console.log(res);

    }
  })
}


removewish(id:any){
 
  this._RandomdataService.removewish(id).subscribe({

    next:(res)=>{
      this.backdata=res.data
console.log(res);
this._ToastrService.error('Product removed successfully to your wishlist')
    }
  })
}
// message
iddtocart(id:any){
this._CartService.addproduct(id).subscribe({

  next:(res)=>{
console.log(res);
this._ToastrService.success(res.message)

  }
})
}
addprod(id:string){
  this._CartService.addproduct(id).subscribe({
  
  
    next:(res)=>{
      this._ToastrService.success(res.message)
      this._CartService.cartconut.next(res.numOfCartItems)
  console.log(res);
  
    }
  })
  }
}
