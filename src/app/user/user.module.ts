import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule, userRoutingComponents } from './user-routing.module';

/* MDBootstrap */
import { NavbarModule} from 'angular-bootstrap-md';
import { ModalModule, WavesModule, InputsModule } from 'angular-bootstrap-md'

/*Angular-Material */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule,MatSortModule,MatPaginatorModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule, MatInputModule,MatStepperModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';


/*user service*/
import { CurrentQuizService } from './userServices/current-quiz.service';
import { UserHistoryService } from './userServices/user-history.service';
import { ChangePasswordService } from './userServices/change-password.service';
import { StartQuizService } from './userServices/start-quiz.service';
import { ResultCalculationService } from './userServices/result-calculation.service';
import { ResultDisplayService } from './userServices/result-display.service';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,ReactiveFormsModule,
    MatIconModule,
    NavbarModule, WavesModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule, MatInputModule,MatStepperModule,MatProgressSpinnerModule,
    MatTableModule,MatTabsModule,
    HttpClientModule,
    RouterModule,
    ModalModule,
    InputsModule,
    MatRadioModule


  ],
  declarations: [
    userRoutingComponents,
    
  ],
  providers: [ChangePasswordService,CurrentQuizService,UserHistoryService,
                StartQuizService,ResultCalculationService,ResultDisplayService],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class UserModule { }
