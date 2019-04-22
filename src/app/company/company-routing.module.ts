import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
all routing components of this module defined here
*/
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { CompanyCreateQuizComponent } from './company-create-quiz/company-create-quiz.component';
import { CompanyCreatedQuizComponent } from './company-created-quiz/company-created-quiz.component';
import { CompanyResultComponent } from './company-result/company-result.component';
import { CompanyStudentDetailsComponent } from './company-student-details/company-student-details.component';
import { CompanyChangePasswordComponent } from './company-change-password/company-change-password.component';

const routes: Routes = [
                         {
                            path:'',
                            redirectTo:'dashboard',
                            pathMatch:'full'
                          },
                          {
                            path:'dashboard',
                            component:CompanyDashboardComponent,
                            children:[
                                       {
                                         path:'createQuiz',
                                         component: CompanyCreateQuizComponent ,
                                       },
                                       {
                                        path:'createdQuiz',
                                        component:CompanyCreatedQuizComponent ,
                                      },
                                      {
                                        path:'result',
                                        component:CompanyResultComponent ,
                                      },
                                      {
                                        path:'studentDetails',
                                        component:CompanyStudentDetailsComponent ,
                                      },
                                      {
                                        path:'changePassword',
                                        component:CompanyChangePasswordComponent
                                      }
                                     ]
                          } 
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }


export const companyRoutingComponents=[
                                       CompanyDashboardComponent,
                                       CompanyCreateQuizComponent,
                                       CompanyCreatedQuizComponent,
                                       CompanyResultComponent,
                                       CompanyStudentDetailsComponent, 
                                       CompanyChangePasswordComponent      
                                      ]
