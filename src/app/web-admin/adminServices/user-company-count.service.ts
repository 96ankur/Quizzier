import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Injectable()
export class UserCompanyCountService {

  constructor(private _http:HttpClient) { }
  header=new HttpHeaders({
    'Content-Type':'application/json',
    'client-token':sessionStorage.getItem('tkn')
  })
  userCompanyCount(){
    return this._http.get('http://localhost:5000/user/userCompanyCount',{headers:this.header})
  }
}
