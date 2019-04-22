import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayNameService } from '../../Services/display-name.service';
import { RouterModule,  NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
 
  hideElement = false;
  private userName=undefined
  public token

  constructor(private router: Router,private route:Router,private displayNameService:DisplayNameService) { 

    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
      (this.router.navigate(['home']))
      }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/user/dashboard') {
          this.hideElement = false;
      
        }  else {
          this.hideElement =true;
        }
      }
    });
  }

  ngOnInit() {
    this.displayNameService.display("user").subscribe((res:any)=>{
      if(res.success){
        this.userName=res.data.userName
      }
    })

  }
  logout(){
    sessionStorage.removeItem('tkn')
    this.route.navigate(['home'])

  }

}
