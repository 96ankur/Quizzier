import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CompanySignupService {

  constructor(private _http:HttpClient) { }

  companySignup(value){
    return this._http.post('http://localhost:5000/user/signup_company',{
      userName:value.userName,
      email:value.email,
      password:value.password,
      phone:value.phone,
      companyName:value.companyName
    })

  }}
