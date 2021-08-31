import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }
  getallProduct():Observable<any>{
    return this._http.get('http://localhost:3000/showAll')
  }
  addProduct(productData:any):Observable<any>{
    return this._http.post('http://localhost:3000/addProduct',productData)
  }
  deleteProduct(id:any):Observable<any>{
    return this._http.post('http://localhost:3000/deleteProduct/'+id,null)
  }
  getSingleData(mydata:any):Observable<any>{
    return this._http.get('http://localhost:3000/showOne/'+mydata)
  }
}
