import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ResultCalculationService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    'Content-Type':'application/json',
    'client-token':sessionStorage.getItem('tkn')
  })

  result(userResponse,quizName){
    return this._http.post('http://localhost:5000/user/resultCalcuation',{
      quizName:quizName,
      userResponse:userResponse
    },{headers:this.header})
  }
}
