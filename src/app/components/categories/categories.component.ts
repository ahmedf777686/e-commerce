import { Component, OnInit } from '@angular/core';
import { ApidataService } from 'src/app/apidata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  constructor(private _ApidataService:ApidataService){}
x:any=''
cat:any=''

  ngOnInit(): void {
    this._ApidataService.getallcategories().subscribe({
      next:(res)=>{
        this.cat=res.data


      },
      error:(err)=>{
console.log(err);

      },
    })



  }

  detailscat(id:any){
this._ApidataService.details(id).subscribe({
  next:(res)=>{
    this.x=res
console.log(res);

  }
})

  }


}
