import { RandomdataService } from 'src/app/serviecs/randomdata.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart.service';



@Component({
  selector: 'app-navbarone',
  templateUrl: './navbarone.component.html',
  styleUrls: ['./navbarone.component.scss']
})
export class NavbaroneComponent  implements OnInit{
constructor(private _Router:Router,private _CartService:CartService,private _ToastrService:ToastrService,private _RandomdataService:RandomdataService){}
numcount:any=0
count2:any
backdata:string[]=[]
ngOnInit(): void {
  this._RandomdataService.countwish.subscribe({
    next:(res)=>{
this.count2=res
    }
  })
  this._RandomdataService.displaywish().subscribe({
    next:(res)=>{
      this.count2=res.count
     

    }
  })
  this._CartService.cartconut.subscribe({
next:(res)=>{
this.numcount=res
}
  })
  this._CartService.displaay().subscribe({
    next:(res)=>{
this._CartService.cartconut.next(res.numOfCartItems)
    }
  })
}
  logout():void{
    localStorage.removeItem('_token')
this._Router.navigate(['/login'])
  }

  whatsApp(){
   this._ToastrService.info(' I do not have WhatsApp. I can contact Facebook, Instagram, or LinkedIn.........!')
  }
}
