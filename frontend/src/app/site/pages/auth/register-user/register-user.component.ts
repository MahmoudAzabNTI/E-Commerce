import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/site/services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
registerForm: FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
  gender: new FormControl('', Validators.required)
})
  constructor(private _router: Router, private _as: AuthService) { }

  ngOnInit(): void {
  }
  signUp(){
    this._as.registerUser(this.registerForm.value).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['auth', 'login'])
      }
    )
  }
}
