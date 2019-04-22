import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/* total modules  and components of this project whose root routing defined here */

import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserModule } from './user/user.module';
import { WebAdminModule } from './web-admin/web-admin.module';
import { CompanyModule } from './company/company.module';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
   {
     path:'',
     redirectTo:"home",
     pathMatch:'full'
   },
   {
    path:'home',
    component:HomepageComponent
   },
   {
    path:'home/features',
    component:HomepageComponent
     
   },
   {
     path:'user',
     loadChildren:'./user/user.module#UserModule'
   },
   {
     path:'company',
     loadChildren:'./company/company.module#CompanyModule'
    },
   {
     path:'admin',
     loadChildren:'./web-admin/web-admin.module#WebAdminModule'
   },
   {
     path:'forgotPassword',
     component:ForgotPasswordComponent,
   },
   {
     path:'changePassword/:p/:e',
     component:ChangePasswordComponent,
   },
   
   {
     path:'**',
     redirectTo:'error404',
     pathMatch:'full',
   },
   {
    path:'error404',
    component:PagenotfoundComponent
   }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }

export const rootRoutingComponents=[
    PagenotfoundComponent,
    HomepageComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
];