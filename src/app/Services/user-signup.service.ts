import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserSignupService {

  constructor(private _http:HttpClient) { }

  userSignup(value){
    return this._http.post('http://localhost:5000/user/signup_user',{
      userName:value.userName,
      email:value.email,
      password:value.password,
      name:value.name,
      phone:value.phone,
      company:value.company,
      studentId:value.StudentId
    })

  }
}
