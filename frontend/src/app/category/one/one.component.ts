import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  mydata:any []=[]
  finish:any []=[]
  
  dtOptions: DataTables.Settings = {};
  
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private _single:DataService,private _active:ActivatedRoute) { 
    
    _single.getProductincat(_active.snapshot.params.id).subscribe(
      (data)=>{console.log(data),this.mydata.push(data),
        this.finish=this.mydata[0][0].data,
        this.dtTrigger.next();}
        
      
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
    this._single.deleteProduct(mydata._id).subscribe(
      (data)=>{console.log(data)}
    )
    console.log(mydata)
    this.finish.splice(index,1)
   
  }
  edit(mydata:any){
    console.log(mydata._id)
    
  }

}
