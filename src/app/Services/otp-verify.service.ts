import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class OtpVerifyService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "client-token":sessionStorage.getItem("tkn")

  })

  otpVerify(value){
    return this._http.post("http://localhost:5000/user/otpVerifyUser",{
      otp:value.otp},{headers:this.header})
  }
}
