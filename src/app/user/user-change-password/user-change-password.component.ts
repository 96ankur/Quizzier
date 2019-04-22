import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ChangePasswordService } from '../userServices/change-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.scss']
})
export class UserChangePasswordComponent implements OnInit {
  hide = true;
  userChangePasswordForm:FormGroup;
  public token


  constructor( private fb:FormBuilder,private router:Router,private changePasswordService:ChangePasswordService) { 
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      (this.router.navigate(['home']))
      }
  }

  ngOnInit() {
    this.createForms();
  }
  createForms(){
    this.userChangePasswordForm = this.fb.group({
      oldPassword:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#_])[a-zA-Z0-9@#_]+$')]) ],
      newPassword:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#_])[a-zA-Z0-9@#_]+$')]) ],
      confirmPassword:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#_])[a-zA-Z0-9@#_]+$')]) ],
    })
  }
  
//api calling                                                                                                                                                                                               
onSubmitUserChangePasswordForm(value){
  this.changePasswordService.changePassword(value).subscribe((res:any)=>{
    if(res.success){
      window.alert(res.msg)
      this.router.navigate(['user/dashboard'])
    }else{
      window.alert(res.msg)
    }
  },err=>{
    window.alert(err)
  })
}
}
