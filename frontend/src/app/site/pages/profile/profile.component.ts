import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
myData: any;
  constructor(private _router: Router, private _as: AuthService) { }

  ngOnInit(): void {
    this._as.meUser().subscribe(
      data => {
        console.log(data);
        this.myData = data[0].data;
      }
    )
  }
  singOut(){
    this._as.logoutUser().subscribe(
      data => {
        localStorage.removeItem('MyTokenApp');
        console.log("logout")
        this._router.navigate(['auth', 'login'])
      } 
    )
  }


}
