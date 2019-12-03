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
    return this._http.post('http://localhost:5000/user/changePassword',{
      newPassword:value.newPassword,
      oldPassword:value.oldPassword,
      confirmPassword:value.confirmPassword
    },{
      headers:this.header
    }).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error || "Error")
  }
}
