import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { WebAdminRoutingModule, adminRoutingComponents } from './web-admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginAdminService } from './adminServices/login-admin.service';
import { RouterModule } from '@angular/router';
import { CompanydetailsService } from './adminServices/companydetails.service';
import { QuizConductedService } from './adminServices/quiz-conducted.service';
import { QuizPendingService } from './adminServices/quiz-pending.service';


/* MDBootstrap */
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { ModalModule, InputsModule } from 'angular-bootstrap-md';


/*Angular-Material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule,MatSortModule,MatPaginatorModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule, MatInputModule,MatStepperModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { WebCompanyQuizConductedComponent } from './web-company-quiz-conducted/web-company-quiz-conducted.component';
import { WebCompanyQuizPendingComponent } from './web-company-quiz-pending/web-company-quiz-pending.component';
import { UserCompanyCountService } from './adminServices/user-company-count.service';



@NgModule({
  imports: [
    CommonModule,
    WebAdminRoutingModule,
    RouterModule,   
    FormsModule,ReactiveFormsModule,
    NavbarModule, WavesModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule, MatInputModule,MatStepperModule,MatProgressSpinnerModule,
    MatTableModule,MatTabsModule,
    ModalModule,InputsModule,
    MatToolbarModule,MatExpansionModule,MatButtonModule,
    HttpClientModule,
  
  ],
  declarations: [
    adminRoutingComponents,
    WebCompanyQuizConductedComponent,
    WebCompanyQuizPendingComponent,
    

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [LoginAdminService,CompanydetailsService,QuizConductedService,QuizPendingService,UserCompanyCountService]
})
export class WebAdminModule { }
