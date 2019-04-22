import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule,  NavigationEnd } from '@angular/router';
import { UserCompanyCountService } from '../adminServices/user-company-count.service';

@Component({
  selector: 'app-web-admin-dashboard',
  templateUrl: './web-admin-dashboard.component.html',
  styleUrls: ['./web-admin-dashboard.component.scss']
})
export class WebAdminDashboardComponent implements OnInit {

  userCount
  companyCount
  hideElement = false;
  public token
  constructor(private router: Router,private route:Router,private userCompanyCount:UserCompanyCountService) {
    
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN')
      this.router.navigate(['home'])
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/admin/dashboard') {
          this.hideElement = false;
      
        }  else {
          this.hideElement =true;
        }
      }
    });
  }

  ngOnInit() {
    this.userCompanyCount.userCompanyCount().subscribe((res:any)=>{
      if(res.success){
        this.userCount=res.count.userCount
        this.companyCount=res.count.companyCount
      }else{
        window.alert(res.msg)
      }
    })
  }
  logout(){
    sessionStorage.removeItem('tkn')
    this.route.navigate(['home'])
  }

}
