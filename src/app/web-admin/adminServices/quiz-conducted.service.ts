import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Injectable()
export class QuizConductedService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    'Content-Type':'application/json',
    'client-token':sessionStorage.getItem('tkn')
  })

  conductedQuiz(){
    return this._http.get('http://localhost:5000/user/quizConducted',{headers:this.header})
  }
}
