import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordService } from '../companyServices/change-password.service';

@Component({
  selector: 'app-company-change-password',
  templateUrl: './company-change-password.component.html',
  styleUrls: ['./company-change-password.component.scss']
})
export class CompanyChangePasswordComponent implements OnInit {
  

  companyChangePasswordForm:FormGroup;

  hide=true;
  token


  constructor(private fb:FormBuilder,private router:Router,private changePasswordService:ChangePasswordService) { 
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      // window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
      (this.router.navigate(['home']))
      }
  }

  ngOnInit() {
    this.createForms();
  }

  
createForms(){
  this.companyChangePasswordForm = this.fb.group({
      oldPassword:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#_])[a-zA-Z0-9@#_]+$')]) ],
      newPassword:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#_])[a-zA-Z0-9@#_]+$')]) ],
      confirmPassword:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#_])[a-zA-Z0-9@#_]+$')]) ],

  })
}

//api calling
onSubmitCompanyChangePasswordForm(value){
  this.changePasswordService.changePassword(value).subscribe((res:any)=>{
    if(res.success){
      window.alert(res.msg)
      this.router.navigate(['user/dashboard'])
    }else{
      window.alert(res.msg)
    }
  },err=>{
    window.alert(err)
  })}

}
