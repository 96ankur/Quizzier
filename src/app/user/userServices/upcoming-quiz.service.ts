import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserUpcomingQuizItem} from '../quizInterfaces'

@Injectable({
  providedIn: 'root'
})
export class UpcomingQuizService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-type":"application/json",
    "client-token":sessionStorage.getItem('tkn')
  })

  upcomingtQuiz():Observable<UserUpcomingQuizItem[]>{
    return this._http.get<UserUpcomingQuizItem[]>('http://localhost:5000/user/upcomingQuiz',{headers:this.header})
  }
}
