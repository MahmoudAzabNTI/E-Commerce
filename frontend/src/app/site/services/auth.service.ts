import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }
  loginUser(body:any): Observable<any>{
    return this._http.post(`${environment.apiUrl}/auth/login`, body)
  }
  registerUser(body:any):Observable<any>{
    return this._http.post(`${environment.apiUrl}/auth/register`, body)
  }
  logoutUser(): Observable<any>{
    return this._http.post(`${environment.apiUrl}/auth/logout`, {})
  }
  meUser():Observable<any>{
    return this._http.get(`${environment.apiUrl}/auth/me`)
  }
  
}
