import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
all components of this module defined here
*/
import { LoginComponent } from './login/login.component';
import { WebAdminDashboardComponent } from './web-admin-dashboard/web-admin-dashboard.component';
import { WebCompanyDetailsComponent } from './web-company-details/web-company-details.component';
import { WebCompanyQuizConductedComponent } from './web-company-quiz-conducted/web-company-quiz-conducted.component';
import { WebCompanyQuizPendingComponent } from './web-company-quiz-pending/web-company-quiz-pending.component';



const routes: Routes = [
                          {
                            path:'',
                            redirectTo:'login',
                            pathMatch:'full'
                           
                          },
                          {
                            path:'login',
                            component:LoginComponent,
                          },
                          {
                            path:'dashboard',
                            component:WebAdminDashboardComponent,
                            children:[
                              {
                                path:'companyDetails',
                                component: WebCompanyDetailsComponent,
                              },
                              {
                                path:'quizConducted',
                                component:WebCompanyQuizConductedComponent,
                              },
                              {
                                path:'quizPending',
                                component:WebCompanyQuizPendingComponent,
                              },
                            ]
                          }
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAdminRoutingModule { }

export const adminRoutingComponents=[
                                      LoginComponent,
                                      WebAdminDashboardComponent,
                                      WebCompanyDetailsComponent,
                                      WebCompanyQuizConductedComponent,
                                      WebCompanyQuizPendingComponent
                                    ]
