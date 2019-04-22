import { Component, OnInit } from '@angular/core';
import { CompanydetailsService } from '../adminServices/companydetails.service';
import {companyDetails } from '../adminInterfaces'
import { Router } from '@angular/router';


@Component({
  selector: 'app-web-company-details',
  templateUrl: './web-company-details.component.html',
  styleUrls: ['./web-company-details.component.scss']
})
export class WebCompanyDetailsComponent implements OnInit {

  public companyName=undefined
  public companyDetails:companyDetails[]
  public token

  constructor(private companyDetailsService:CompanydetailsService,private router:Router) {
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      (this.router.navigate(['home'])).then(nav=>{
        console.log(nav)
      },err=>console.log(err))
    }
  }

  companyNamepassing(companyName){
    this.companyName=companyName
  }
  

  ngOnInit() {
    this.companyDetailsService.companyDetails().subscribe((res:any)=>{
      if(res.success){
          this.companyDetails=res.data
      }else{
        window.alert(res.msg)
      }
    })
  }

  approveStatus(){
    this.companyDetailsService.approve(this.companyName).subscribe((res:any)=>{
        window.alert(res.msg)
        // this.router.navigate(['admin/dashboard/companyDetails'])
    })
  }

  disapproveStatus(){
    this.companyDetailsService.disapprove(this.companyName).subscribe((res:any)=>{
      window.alert(res.msg)
    })
  }

  approvedCompany(){
    this.companyDetailsService.approvedCompanyDetails().subscribe((res:any)=>{
      if(res.success){
          this.companyDetails=res.data
      }else{
        window.alert(res.msg)
      }
    })
  }

  disapprovedCompany(){
    this.companyDetailsService.disapprovedCompanyDetails().subscribe((res:any)=>{
      if(res.success){
          this.companyDetails=res.data
      }else{
        window.alert(res.msg)
      }
    })
  }

  pendingCompany(){
    this.companyDetailsService.pendingCompanyDetails().subscribe((res:any)=>{
      if(res.success){
          this.companyDetails=res.data
      }else{
        window.alert(res.msg)
      }
    })
  }
}