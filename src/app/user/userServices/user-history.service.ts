import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserHistoryItem} from '../quizInterfaces'


@Injectable()
export class UserHistoryService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-type":"application/json",
    "client-token":sessionStorage.getItem('tkn')
  })

  userHistory():Observable<UserHistoryItem[]>{
    return this._http.get<UserHistoryItem[]>('http://localhost:5000/user/userHistory',{headers:this.header})
  }
}
