import { CartService } from './../../cart.service';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApidataService } from 'src/app/apidata.service';
import { ToastrService } from 'ngx-toastr';
import { RandomdataService } from 'src/app/serviecs/randomdata.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
constructor( private _ApidataService:ApidataService,private _CartService:CartService,private _ToastrService:ToastrService,private _RandomdataService:RandomdataService, private _Renderer2:Renderer2){}
apidata:any=''
ser:string=''
allcat:any=''

backdata:string[]=[]
ngOnInit(): void {
  this._RandomdataService.displaywish().subscribe({
    next:(res)=>{
      let newdata= res.data.map((res:any)=>res._id)
      this.backdata=newdata

    }
  })
  this._ApidataService.getallproduct().subscribe({
    next:(prod)=>{

this.apidata=prod.data
console.log(this.apidata);

    }
  })


  this._ApidataService.getallcategories().subscribe((respons)=>{
    this.allcat=respons.data
console.log( this.allcat);

  })

  
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  autoplay:true,
  navSpeed: 400,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: false
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


addwishlish(id:any){
 

  this._RandomdataService.addwishlist(id).subscribe({
    next:(res)=>{
      this.backdata=res.data
      this._RandomdataService.countwish.next(res.data.length)
 this._ToastrService.success(res.message)

console.log(res);

    }
  })
}


removewish(id:any){
 
  this._RandomdataService.removewish(id).subscribe({

    next:(res)=>{
      this.backdata=res.data
      this._RandomdataService.countwish.next(res.data.length)
console.log(res);
this._ToastrService.error('Product removed successfully to your wishlist')
    }
  })
}


}
