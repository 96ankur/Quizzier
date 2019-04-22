import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '../../../../node_modules/@angular/common/http';

@Injectable()
export class QuizPendingService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    'Content-Type':'application/json',
    'client-token':sessionStorage.getItem('tkn')
  })

  pendingQuiz(){
    return this._http.get('http://localhost:5000/user/quizPending',{headers:this.header})
  }
}
