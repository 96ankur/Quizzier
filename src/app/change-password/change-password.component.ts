import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ChangePasswordService } from '../Services/change-password.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';



@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
   
  hide=true;

  public person
  public email
  public token

  ChangePasswordForm:FormGroup;

  constructor(private fb:FormBuilder,private route:ActivatedRoute,private router:Router,
              private changePasswordService:ChangePasswordService) { }

  ngOnInit() {
    this.createForms();
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.person=params.get('p')
      this.email=params.get('e')
    })
 
  }
createForms(){
  this.ChangePasswordForm = this.fb.group({
    newPassword:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#_])[a-zA-Z0-9@#_]+$')]) ],
    confirmPassword:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#_])[a-zA-Z0-9@#_]+$')]) ],

  })

 }


//change Pasword API
onSubmitChangePasswordForm(value){
  value.person=atob(this.person)
  value.email=atob(this.email)
  this.changePasswordService.changePassword(value).subscribe((res:any)=>{
    if(res.success){
      window.alert(res.msg)
      this.router.navigate(['home'])
    }else{
      window.alert(res.msg)
    }
  })
}

}
