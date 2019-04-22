import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ResendOtpService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"appication/json",
    "client-token":sessionStorage.getItem('tkn')
  })
  resendOtp(){
    return this._http.get('http://localhost:5000/user/resendOtp',{headers:this.header})
  }
}
