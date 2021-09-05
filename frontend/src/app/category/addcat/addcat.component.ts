import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.scss']
})
export class AddcatComponent implements OnInit {
  flag:boolean=true
  message:string='error'
  constructor(private _data:DataService,private _route:Router) { }

  ngOnInit(): void {
  }
  handel(mydata:any){
    console.log(mydata.value)
    this._data.addcat(mydata.value).subscribe(
      data=>{console.log(data),      
       
      
       this._route.navigateByUrl('admin/allcat')
      }
    )
    }
}
