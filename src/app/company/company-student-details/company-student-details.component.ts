import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../companyServices/user-details.service';
import {userDetails } from '../companyInterfaces'
import { Router } from '@angular/router';


@Component({
  selector: 'app-company-student-details',
  templateUrl: './company-student-details.component.html',
  styleUrls: ['./company-student-details.component.scss']
})
export class CompanyStudentDetailsComponent implements OnInit {

  public userId
  public token


  userNamePassing(userId){
    this.userId=userId
  }

  constructor(private userDetailsService:UserDetailsService,private router:Router) {
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      // window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
      (this.router.navigate(['home']))
      }
   }

  public userDetails:userDetails[]


  ngOnInit() {
    this.userDetailsService.userDetails().subscribe((res:any)=>{
      if(res.success){
          this.userDetails=res.data
      }else{
        window.alert(res.msg)
      }
    })
  }

  approveduser(){
    this.userDetailsService.approveduserDetails().subscribe((res:any)=>{
      if(res.success){
          this.userDetails=res.data
      }else{
        window.alert(res.msg)
      }
    })
  }

  disapproveduser(){
    this.userDetailsService.disapproveduserDetails().subscribe((res:any)=>{
      if(res.success){
          this.userDetails=res.data
      }else{
        window.alert(res.msg)
      }
    })
  }

  pendinguser(){
    this.userDetailsService.pendinguserDetails().subscribe((res:any)=>{
      if(res.success){
          this.userDetails=res.data
      }else{
        window.alert(res.msg)
      }
    })
  }

  approveStatus(){
    this.userDetailsService.approve(this.userId).subscribe((res:any)=>{
        window.alert(res.msg)
        // this.router.navigate(['admin/dashboard/userDetails'])
    })
  }

  disapproveStatus(){
    this.userDetailsService.disapprove(this.userId).subscribe((res:any)=>{
      window.alert(res.msg)
    })
  }


}
