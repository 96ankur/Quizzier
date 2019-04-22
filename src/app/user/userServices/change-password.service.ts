import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'

@Injectable()
export class ChangePasswordService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    'Content-Type':'application/json',
    'client-token':sessionStorage.getItem('tkn')
  })

  changePassword(value){
    console.log(this.header)
    return this._http.post('http://localhost:5000/user/changePassword',{
      newPassword:value.newPassword,
      oldPassword:value.oldPassword,
      confirmPassword:value.confirmPassword
    },{
      headers:this.header
    }).pipe(catchError(this.errorHandler))
  }

  errorHandler(errorResponse:HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client Side Error: ',errorResponse.error.message)
    }else{
      console.error('Server Side Error:')
    }
    return Observable.throw(errorResponse.name||"Server Error")
  }
}
