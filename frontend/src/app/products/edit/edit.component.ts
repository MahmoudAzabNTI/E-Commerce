import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  mydata:any
  flag:boolean=true;
  message:string='error'
  registerData :any = {
    name:'', categoryId:null, description:"", price:"",images:""
   }
  constructor(private _data:DataService,private _route:ActivatedRoute,private _r:Router) {
    _data.getSingleData(_route.snapshot.params.id).subscribe(
    (data)=>{
      this.registerData=data[0].data,
      
      console.log(this.mydata.name)
    }
    )
    
   }
   
  ngOnInit(): void {
    
  }
  handleRegister(data:any){
    console.log(data.value)
    this._data.editproduct(this._route.snapshot.params.id,data.value).subscribe(
      (data)=>{console.log(data),
        this.message=data[0].message

        if(!data[0].apiStatus) this.flag=false
        else this._r.navigateByUrl('admin/allProduct')
      }
    )
    
  }
}
