import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApidataService } from 'src/app/apidata.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  implements OnInit{
constructor(private _ApidataService:ApidataService,private _CartService:CartService,private _ToastrService:ToastrService){}
apidata:any

ser:string=''
ngOnInit(): void {
  
  this._ApidataService.getallproduct().subscribe({
    next:(prod)=>{

this.apidata=prod.data
    }
  })
}
addprod(id:string){
  this._CartService.addproduct(id).subscribe({
  
  
    next:(res)=>{

  this._ToastrService.success(res.message
    )
    this._CartService.cartconut.next(res.numOfCartItems)
    }
  })
  }
}
