import { Injectable } from '@angular/core';
import { HttpClient} from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCompanyQuizCountService {

  constructor(private _http:HttpClient) { }
 
  userCompanyCount(){
    return this._http.get('http://localhost:5000/user/userCompanyQuizCount')
  }}
