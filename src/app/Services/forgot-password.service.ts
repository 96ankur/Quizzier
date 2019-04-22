import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ForgetPasswordService {

  constructor(private _http:HttpClient) { }

  forgotPassword(value){
    return this._http.post('http://localhost:5000/user/forgetPasswordMail',{
      email:value.email,
      person:value.person
    })

  }
}
