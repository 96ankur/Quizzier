import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultDisplayService {

  constructor(private http:HttpClient) { }

  header=new HttpHeaders({
    "Content-type":"application/json",
    "client-token":sessionStorage.getItem('tkn')
  })

  resultDisplay(_id){
    return this.http.post('http://localhost:5000/user/resultDisplay',{_id:_id},{headers:this.header})
  }
}
