import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.scss']
})
export class AllproductComponent implements OnInit {
  allproducts:any[]=[]
  dtOptions: DataTables.Settings = {};
  
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private _products:DataService) { 
    _products.getallProduct().subscribe(
      (data)=>{console.log(data),this.allproducts=data[0].data,
        this.dtTrigger.next();},

    )
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  delet(mydata:any,index:number){
    console.log(mydata._id)
    this._products.deleteProduct(mydata._id).subscribe(
      (data)=>{console.log(data)}
    )
    console.log(mydata)
    this.allproducts.splice(index,1)
   
  }
  edit(mydata:any){
    console.log(mydata._id)
    
  }
 
}
