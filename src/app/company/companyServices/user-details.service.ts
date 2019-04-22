import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {userDetails} from '../companyInterfaces'

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    'Content-Type':'application/json',
    'client-token':sessionStorage.getItem('tkn')
  })

  userDetails():Observable<userDetails[]>{
    return this._http.get<userDetails[]>('http://localhost:5000/user/userDetails',{headers:this.header})
  }

  approveduserDetails():Observable<userDetails[]>{
    return this._http.post<userDetails[]>('http://localhost:5000/user/sortedUserDetails',{type:'Approved'},{headers:this.header})
  }

  disapproveduserDetails():Observable<userDetails[]>{
    return this._http.post<userDetails[]>('http://localhost:5000/user/sortedUserDetails',{type:'Disapproved'},{headers:this.header})
  }

  pendinguserDetails():Observable<userDetails[]>{
    return this._http.post<userDetails[]>('http://localhost:5000/user/sortedUserDetails',{type:'Pending'},{headers:this.header})
  }

  approve(Id){
    return this._http.post('http://localhost:5000/user/companyApproval',
    {studentId:Id},
    {headers:this.header})
  }

  disapprove(Id){
    return this._http.post('http://localhost:5000/user/companyDisapproval',
    {studentId:Id}
    ,{headers:this.header})
  }
}
