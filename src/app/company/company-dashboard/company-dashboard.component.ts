import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayNameService } from '../../Services/display-name.service';
import { RouterModule,  NavigationEnd } from '@angular/router';
import { UserCountService } from '../companyServices/user-count.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {

  hideElement = false;
  private companyName=undefined
  token
  public count=undefined

  constructor(private router: Router,private displayNameService:DisplayNameService,
              private userCount:UserCountService) { 

    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
      (this.router.navigate(['home']))
      }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/company/dashboard') {
          this.hideElement = false;
        }  else {
          this.hideElement =true;
        }
      }
    });
  }

  ngOnInit() {
    this.displayNameService.display("company").subscribe((res:any)=>{
      if(res.success){
        this.companyName=res.data.companyName
      }
    })

    this.userCount.userCount().subscribe((res:any)=>{
      if(res.success){
        this.count=res.userCount
        console.log(res.userCount)
      }
    })
  }

  logout(){
    sessionStorage.removeItem('tkn')
    this.router.navigate(['home'])

  }
}
