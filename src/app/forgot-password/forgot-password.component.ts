import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ForgetPasswordService } from '../Services/forgot-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  
  userForgotPasswordForm:FormGroup;
  companyForgotPasswordForm:FormGroup;
  public token

  constructor(private fb:FormBuilder,private router:Router,private forgetPasswordService:ForgetPasswordService) { 
    
  }

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    this.userForgotPasswordForm = this.fb.group({
      email:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],

    })

    this.companyForgotPasswordForm = this.fb.group({
      email:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],

    })
}

//forgotPassword API Calling

onSubmitUserForgotPasswordForm(value){
  value.person='user'
  this.forgetPasswordService.forgotPassword(value).subscribe((res:any)=>{
    if(res.success){
      window.alert(res.msg)
      this.router.navigate(['home'])
    }else{
      window.alert(res.msg)

    }
  })
}
onSubmitCompanyForgotPasswordForm(value){
  value.person='company'
  this.forgetPasswordService.forgotPassword(value).subscribe((res:any)=>{
    if(res.success){
      window.alert(res.msg)
      this.router.navigate(['home'])
    }else{
      window.alert(res.msg)
    }
  })
 }
}