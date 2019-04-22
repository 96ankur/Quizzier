import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserSignupService } from '../Services/user-signup.service';
import { CompanySignupService } from '../Services/company-signup.service';
import { OtpVerifyService } from '../Services/otp-verify.service';
import { OtpVerifyCompanyService } from '../Services/otp-verify-company.service';
import { LoginUserService } from '../Services/login-user.service';
import { LoginCompanyService } from '../Services/login-company.service';
import { Router } from '@angular/router';
import { ResendOtpService } from '../Services/resend-otp.service';
import {UserCompanyQuizCountService} from '../Services/user-company-quiz-count.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  flag=false

  Disable
  quizCount
  userCount
  companyCount

  hide=true;
  
  userSignupForm: FormGroup;
  userSignupOTPForm:FormGroup;
  companySignupForm:FormGroup;
  companySignupOTPForm:FormGroup;
  userLoginForm:FormGroup;
  companyLoginForm:FormGroup;
  

  constructor(
              private fb: FormBuilder,private route:Router,private loginUserService:LoginUserService,
              private loginCompanyService:LoginCompanyService, private otpVerify:OtpVerifyService,
              private otpVerifyCompany:OtpVerifyCompanyService, private userSignup:UserSignupService,
              private companySignup:CompanySignupService,private resendOtpService:ResendOtpService,
              private userCompanyQuizCount:UserCompanyQuizCountService) { }

  ngOnInit() {
    this.createForms();

    this.userCompanyQuizCount.userCompanyCount().subscribe((res:any)=>{
      if(res.success){
        this.userCount=res.count.userCount
        this.companyCount=res.count.companyCount
        this.quizCount=res.count.quizCount
      }else{
        window.alert(res.msg)
      }
    })
  }

  createForms() {
    this.userSignupForm = this.fb.group({
      name:['', Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern('^[a-zA-Z][a-zA-Z ]+[a-zA-Z]') ])],
      userName:['', Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(15),Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$') ])],
      phone:['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[789][0-9]*$') ])],
      company:['', Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(40),Validators.pattern('^[a-zA-Z][a-zA-Z ]+[a-zA-Z]') ])],
      email:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#_])[a-zA-Z0-9@#_]+$')]) ],        
      StudentId:['', Validators.compose([Validators.required,Validators.minLength(1),Validators.maxLength(40),Validators.pattern('^[a-zA-Z0-9]*$') ])],      
    })

   this.userSignupOTPForm=this.fb.group({
    otp:['', Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(5),Validators.pattern('^[0-9]*$')  ])],   
   })

   this.companySignupForm = this.fb.group({
    userName:['', Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$') ])],
    phone:['', Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[789][0-9]*$') ])],
    companyName:['', Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(50),Validators.pattern('^[a-zA-Z][a-zA-Z ]+[a-zA-Z]') ])],
    email:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
    password:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#_])[a-zA-Z0-9@#_]+$')]) ]
    
  })


  this.companySignupOTPForm=this.fb.group({
    otp:['', Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(5),Validators.pattern('^[0-9]*$') ])],   
   })
   this.userLoginForm=this.fb.group({
    email:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
    password:['',Validators.compose([Validators.required,]) ]

  })
    
 this.companyLoginForm=this.fb.group({
  email:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
  password:['',Validators.compose([Validators.required]) ]

  })
  }

//user/company login/signup API calling
  onSubmitUserSignupForm(value){
    //console.log(this.disabled);
    this.userSignup.userSignup(value).subscribe((res:any)=>{
      if(res.success){
       // this.disabled=false;
        //console.log(this.disabled);
        this.Disable=false;
  
        window.alert(res.msg)
        sessionStorage.setItem('tkn',res.token)
      }else{
        window.alert(res.msg)
      }

    })
  }
  onSubmitUserSignupOTPForm(value){
   this.otpVerify.otpVerify(value).subscribe((res:any)=>{
     if(res.success){
      window.alert(res.msg)
      sessionStorage.removeItem('tkn')
      this.route.navigate(['home'])
     }else{
      window.alert(res.msg)
     }
   })
  }
  onSubmitCompanySignupForm(value){
    this.companySignup.companySignup(value).subscribe((res:any)=>{
      if(res.success){
        window.alert(res.msg)
        this.flag=true
        sessionStorage.setItem('tkn',res.token)
      }else{
        window.alert(res.msg)
      }

    })
  }
  onSubmitCompanySignupOTPForm(value){
    this.otpVerifyCompany.otpVerify(value).subscribe((res:any)=>{
      if(res.success){
        window.alert(res.msg)
        sessionStorage.removeItem('tkn')
        this.route.navigate([''])
       }else{
        window.alert(res.msg)
       }
    }) 
  }
  onSubmitCompanyLoginForm(value){
    this.loginCompanyService.login(value).subscribe((res:any)=>{
      if(res.success){
        sessionStorage.setItem('tkn',res.token)
        this.route.navigate(['company/dashboard'])
      }else{
        window.alert(res.msg)
      }

    })
  } 
  onSubmitUserLoginForm(value){
    this.loginUserService.login(value).subscribe((res:any)=>{
      if(res.success){
        sessionStorage.setItem('tkn',res.token)
        this.route.navigate(['user/dashboard'])
      }else{
        window.alert(res.msg)
      }
    })
  } 
//resend OTP API
resendOTP(){
  this.resendOtpService.resendOtp().subscribe((res:any)=>{
      window.alert(res.msg)
  })

}



}
