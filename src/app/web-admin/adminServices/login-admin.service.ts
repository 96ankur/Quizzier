import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginAdminService {

  constructor(private _http:HttpClient,private route:Router) { }
  login(value){
    return this._http.post('http://localhost:5000/user/loginAdmin',{
      email:value.email,
      password:value.password
    })
  }
}
