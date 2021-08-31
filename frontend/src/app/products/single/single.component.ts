import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
mydata:any
  constructor(private _single:DataService,private _active:ActivatedRoute) {
    _single.getSingleData(_active.snapshot.params.id).subscribe(
      (data)=>{console.log(data),this.mydata=data[0].data}
    )
   }

  ngOnInit(): void {
  }

}
