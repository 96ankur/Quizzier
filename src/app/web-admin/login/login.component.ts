import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginAdminService } from '../adminServices/login-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  adminLoginForm:FormGroup;
  
  hide=true;

  constructor(private fb: FormBuilder,private loginAdminService:LoginAdminService,private route:Router) { }

  ngOnInit() {
    this.createForms();
  }
  createForms() {
    this.adminLoginForm=this.fb.group({
      email:['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password:['',Validators.required]
    })
    
  }

//api for admin login
onSubmitAdminLoginForm(value){
  this.loginAdminService.login(value).subscribe((res:any)=>{
    if(res.success){
      sessionStorage.setItem('tkn',res.token)
      this.route.navigate(['admin/dashboard'])
    }else{
      window.alert(res.msg)
    }
  })
}

}
