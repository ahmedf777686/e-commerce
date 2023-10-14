import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApidataService } from 'src/app/apidata.service';
import { CartService } from 'src/app/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  details:any={}
  id:any
constructor( private _ActivatedRoute:ActivatedRoute,private _ApidataService:ApidataService,private _CartService:CartService,private _ToastrService:ToastrService){}
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(respons)=>{
      this.id=respons.get('id')

    }
  })

  this._ApidataService.detailsapi(this.id).subscribe((detailsdata)=>{
this.details=detailsdata.data




  })


}
addprod(id:string){
  this._CartService.addproduct(id).subscribe({
  
  
    next:(res)=>{
      this._ToastrService.success(res.message
        )
  console.log(res);
  
    }
  })
  }
  


customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  items:1,
  navSpeed: 700,
  navText: ['', ''],

  nav: true
}

}
