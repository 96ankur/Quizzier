import { MatRadioModule } from '@angular/material/radio';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* routing module */
import { AppRoutingModule, rootRoutingComponents } from './app-routing.module';


/* MDBootstrap */
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';


/*Angular-Material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule,MatSortModule,MatPaginatorModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule, MatInputModule,MatStepperModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';

/*root services */
import { UserSignupService } from './Services/user-signup.service';
import { CompanySignupService } from './Services/company-signup.service';
import { HttpClientModule } from '@angular/common/http';
import { OtpVerifyService } from './Services/otp-verify.service';
import { OtpVerifyCompanyService } from './Services/otp-verify-company.service';
import { LoginUserService } from './Services/login-user.service';
import { LoginCompanyService } from './Services/login-company.service';
import { RouterModule } from '@angular/router';
import { DisplayNameService } from './Services/display-name.service';
import { ForgetPasswordService } from './Services/forgot-password.service';
import { ChangePasswordService } from './Services/change-password.service';
import { ResendOtpService } from './Services/resend-otp.service';
import { UserCompanyQuizCountService } from './Services/user-company-quiz-count.service';

@NgModule({
  declarations: [
    /*root*/
    AppComponent,

    //root routing components

    rootRoutingComponents,



  ],
  imports: [
    
    FormsModule,ReactiveFormsModule,
    NavbarModule, WavesModule,
    MatCardModule,MatIconModule,
    BrowserModule,MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule, MatInputModule,MatStepperModule,MatProgressSpinnerModule,
    MatTableModule,MatTabsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatRadioModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [UserSignupService,CompanySignupService,OtpVerifyService,OtpVerifyCompanyService,
              LoginUserService,LoginCompanyService,DisplayNameService,ForgetPasswordService,
              ChangePasswordService,ResendOtpService,UserCompanyQuizCountService],

  bootstrap: [AppComponent]
})
export class AppModule { }
