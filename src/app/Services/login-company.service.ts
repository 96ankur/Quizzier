import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginCompanyService {

  constructor(private _http:HttpClient) { }

  login(value){
    return this._http.post('http://localhost:5000/user/loginCompany',{
      email:value.email,
      password:value.password
    })


  }
}
