import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginUserService {

  constructor(private _http:HttpClient) { }

  login(value){
    return this._http.post('http://localhost:5000/user/loginUser',{
      email:value.email,
      password:value.password
    })
  }
}
