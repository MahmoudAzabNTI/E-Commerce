import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-allcat',
  templateUrl: './allcat.component.html',
  styleUrls: ['./allcat.component.scss']
})
export class AllcatComponent implements OnInit {
  allcategory:any
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private _category:DataService) {
    _category.getallCatogery().subscribe(
      (data)=>{console.log(data),
        this.allcategory=data,
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
    this._category.deleteCatogery(mydata._id).subscribe(
      (data)=>{console.log(data)}
    )
    console.log(mydata)
    this.allcategory.splice(index,1)
   
  }
}
