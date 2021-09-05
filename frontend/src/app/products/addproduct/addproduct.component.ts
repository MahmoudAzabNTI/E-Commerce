import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
 flag:boolean=true
 message:string='error'
  constructor(private _product:DataService,private _route:Router) { }

  ngOnInit(): void {
  }
  handel(mydata:any){
    console.log(mydata.value)
    this._product.addProduct(mydata.value).subscribe(
      data=>{console.log(data[0]),
        this.message=data[0].message
       
        if(!data[0].apiStatus) this.flag=false
        else this._route.navigateByUrl('admin/allProduct')
      }
    )
    }
}
