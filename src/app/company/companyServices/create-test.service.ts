import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateTestService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    "Content-Type":"application/json",
    "client-token":sessionStorage.getItem('tkn')
  })

  createTest(QuestionData,quizDetails){
    return this._http.post('http://localhost:5000/user/create_test',{
      quizName:quizDetails.QuizName,
      timeDuration:quizDetails.duration,
      noOfQues:quizDetails.noQuestion,
      createdBy:quizDetails.createdBy,
      testDate:quizDetails.date,
      Questions:QuestionData
    },{headers:this.header})
  }
}
