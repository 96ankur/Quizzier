import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChangePasswordService } from './companyServices/change-password.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CompanyRoutingModule, companyRoutingComponents } from './company-routing.module';
import { UserDetailsService } from './companyServices/user-details.service';


/* MDBootstrap */
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule} from 'angular-bootstrap-md';
import { ModalModule, WavesModule, InputsModule } from 'angular-bootstrap-md'

/*Angular-Material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule,MatSortModule,MatPaginatorModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule, MatInputModule,MatStepperModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatTooltipModule} from '@angular/material/tooltip';


import {MatDialogModule,MatDatepickerModule ,MatNativeDateModule,} from "@angular/material";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { SubmitQuizDetailsComponent } from './company-create-quiz/submit-quiz-details/submit-quiz-details.component';
import { CreateTestService } from './companyServices/create-test.service';
import { CreatedQuizService } from './companyServices/created-quiz.service';
import { UserCountService } from './companyServices/user-count.service';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,

    //
    MatSelectModule, MatButtonModule,
    MatDialogModule,MatDatepickerModule ,MatNativeDateModule,
    FormsModule,ReactiveFormsModule,
    NavbarModule, WavesModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule, 
    MatInputModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatTableModule,MatTabsModule,
    RouterModule,
    HttpClientModule,
    ModalModule,
    InputsModule,
    MatTooltipModule,
    MatToolbarModule, MatExpansionModule,

  ],
  declarations: [
                  companyRoutingComponents,
                  SubmitQuizDetailsComponent,
  ],


                schemas: [ NO_ERRORS_SCHEMA ],
                providers: [ChangePasswordService,UserDetailsService,CreateTestService,CreatedQuizService,
                            UserCountService],
                entryComponents:[ SubmitQuizDetailsComponent]})
export class CompanyModule { }
