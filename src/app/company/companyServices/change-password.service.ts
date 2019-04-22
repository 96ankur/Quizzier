import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChangePasswordService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    'Content-Type':'application/json',
    'client-token':sessionStorage.getItem('tkn')
  })

  changePassword(value){
    // console.log(this.header['client-token'])
    return this._http.post('http://localhost:5000/user/changePassword',{
      newPassword:value.newPassword,
      oldPassword:value.oldPassword,
      confirmPassword:value.confirmPassword
    },{
      headers:this.header
    })
  }
}
