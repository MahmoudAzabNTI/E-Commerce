import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.scss']
})
export class AllproductComponent implements OnInit {
  allproducts:any[]=[]
  constructor(private _products:DataService) { 
    _products.getallProduct().subscribe(
      (data)=>{console.log(data),this.allproducts=data[0].data},

    )
  }

  ngOnInit(): void {
  }
  delet(mydata:any,index:number){
    console.log(mydata._id)
    this._products.deleteProduct(mydata._id).subscribe(
      (data)=>{console.log(data)}
    )
    console.log(mydata)
    this.allproducts.splice(index,1)
   
  }
  
}
