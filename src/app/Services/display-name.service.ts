import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DisplayNameService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "client-token":sessionStorage.getItem('tkn')
  })

  display(person){
    return this._http.post('http://localhost:5000/user/displayName',{person:person},{headers:this.header})
  }
}
