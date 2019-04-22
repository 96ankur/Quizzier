import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserCurrentQuizItem} from '../quizInterfaces'
import { Observable } from 'rxjs';


@Injectable()
export class CurrentQuizService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-type":"application/json",
    "client-token":sessionStorage.getItem('tkn')
  })

  currentQuiz():Observable<UserCurrentQuizItem[]>{
    return this._http.get<UserCurrentQuizItem[]>('http://localhost:5000/user/currentQuiz',{headers:this.header})
  }

  checkAttempt(quizName){
    return this._http.post('http://localhost:5000/user/quizAlreadyAttemp',{quizName:quizName},{headers:this.header})
  }
}
