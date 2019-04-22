import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* 
all components of user module
*/
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserResultComponent } from './user-result/user-result.component';
import { UserStartQuizComponent } from './user-start-quiz/user-start-quiz.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { UserCurrentQuizComponent } from './user-current-quiz/user-current-quiz.component';
import { UserUpcomingQuizComponent } from './user-upcoming-quiz/user-upcoming-quiz.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    children: [
      {
        path: 'currentQuizzes',
        component: UserCurrentQuizComponent,
        children: [

          {
            path: 'startQuiz/:_id',
            component: UserStartQuizComponent
          },
          {
            path: 'result/:_id',
            component: UserResultComponent,
          }
        ],
      },
      {
        path: 'upcomingQuizzes',
        component: UserUpcomingQuizComponent,
      },

      {
        path: 'changePassword',
        component: UserChangePasswordComponent,
      },
      {
        path: 'history',
        component: UserHistoryComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

export const userRoutingComponents = [
  UserDashboardComponent,
  UserCurrentQuizComponent,
  UserUpcomingQuizComponent,
  UserHistoryComponent,
  UserResultComponent,
  UserStartQuizComponent,
  UserChangePasswordComponent,

]