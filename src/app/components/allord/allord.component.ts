import { Component } from '@angular/core';
import { ApidataService } from 'src/app/apidata.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-allord',
  templateUrl: './allord.component.html',
  styleUrls: ['./allord.component.scss']
})
export class AllordComponent {
constructor(private _CartService:CartService, private _ApidataService:ApidataService){}

apidata:any=''
  ngOnInit(): void {
    this._ApidataService.getallproduct().subscribe({
      next:(prod)=>{
  
  this.apidata=prod.data
  console.log(this.apidata);
  
      }
    })
  }
}


