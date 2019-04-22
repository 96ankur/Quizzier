import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatedQuizService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    'Content-Type':'application/json',
    'client-token':sessionStorage.getItem('tkn')
  })

  createdQuiz(){
   return  this._http.get("http://localhost:5000/user/createdQuiz",{headers:this.header})
  }

  deleteQuiz(_id){
    return this._http.post('http://localhost:5000/user/deleteQuiz',{_id:_id},{headers:this.header})
  }
}
