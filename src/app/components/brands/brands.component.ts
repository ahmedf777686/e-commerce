import { Component, OnInit } from '@angular/core';
import { RandomdataService } from 'src/app/serviecs/randomdata.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
constructor(private _RandomdataService:RandomdataService){}
brands:any=''
x:any=''

ngOnInit(): void {
  this._RandomdataService.brands().subscribe({
    next:(res)=>{
      this.brands=res.data
console.log(res.data);

    }
  })
}

getdetails(id:any){
this._RandomdataService.brandsdetails(id).subscribe({
  next:(resp)=>{

   this.x= resp.data
   console.log(this.x);
   
    
  }
})

}
}
