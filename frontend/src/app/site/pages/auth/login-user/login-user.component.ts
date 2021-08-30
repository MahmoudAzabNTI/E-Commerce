import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/site/services/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  loginData:any = {
    emai: '',
    password: ''
  }
  constructor(private _router: Router, private _as: AuthService) { }

  ngOnInit(): void {
  }
  signIn(){
    this._as.loginUser(this.loginData).subscribe(
      data => {
        console.log(data);
        localStorage.setItem('MyTokenApp', data[0].data.token);
        this._router.navigate(['profile'])
      }
    )
  }


}
