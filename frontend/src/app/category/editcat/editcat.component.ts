import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editcat',
  templateUrl: './editcat.component.html',
  styleUrls: ['./editcat.component.scss']
})
export class EditcatComponent implements OnInit {
  mydata:any
  flag:boolean=true;
  message:string='error'
  registerData :any = {
    name:'',  color:"", image:""
   }
  constructor(private _data:DataService,private _route:ActivatedRoute,private _r:Router) { 

    _data.getoneCotagery(_route.snapshot.params.id).subscribe(
      (data)=>{
        this.registerData=data,
        console.log(this.mydata.name)
      }
      )
  }

  ngOnInit(): void {
  }
  handleRegister(data:any){
    console.log(data.value)
    if(data.value.image == "") {delete data.value.image}
    this._data.editCatogery(this._route.snapshot.params.id,data.value).subscribe(
      (data)=>{console.log(data),
        

        
         this._r.navigateByUrl('admin/allcat')
      }
    )
    
  }
}
