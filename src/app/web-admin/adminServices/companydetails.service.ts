import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {companyDetails } from '../adminInterfaces'

@Injectable()
export class CompanydetailsService {

  constructor(private _http:HttpClient) { }

  header=new HttpHeaders({
    'Content-Type':'application/json',
    'client-token':sessionStorage.getItem('tkn')
  })

  companyDetails():Observable<companyDetails[]>{
    return this._http.get<companyDetails[]>('http://localhost:5000/user/companyDetails',{headers:this.header})
  }

  approve(company){
    return this._http.post('http://localhost:5000/user/webAdminApproval',
    {companyName:company},
    {headers:this.header})
  }

  disapprove(company){
    return this._http.post('http://localhost:5000/user/webAdminDisapproval',
    {companyName:company}
    ,{headers:this.header})
  }

  approvedCompanyDetails():Observable<companyDetails[]>{
    return this._http.post<companyDetails[]>('http://localhost:5000/user/sortedCompanyDetails',{type:'Approved'},{headers:this.header})
  }

  disapprovedCompanyDetails():Observable<companyDetails[]>{
    return this._http.post<companyDetails[]>('http://localhost:5000/user/sortedCompanyDetails',{type:'Disapproved'},{headers:this.header})
  }


  pendingCompanyDetails():Observable<companyDetails[]>{
    return this._http.post<companyDetails[]>('http://localhost:5000/user/sortedCompanyDetails',{type:'Pending'},{headers:this.header})
  }
}
