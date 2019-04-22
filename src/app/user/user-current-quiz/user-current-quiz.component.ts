import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UserCurrentQuizDataSource} from './user-current-quiz-datasource';
import { Router,RouterModule,  NavigationEnd } from '@angular/router';
import { CurrentQuizService } from '../userServices/current-quiz.service';
import {UserCurrentQuizItem} from '../quizInterfaces'
import { ModalDirective } from '../../../../node_modules/angular-bootstrap-md';

export var currentQuizData:UserCurrentQuizItem[]

@Component({
  selector: 'app-user/user-current-quiz',
  templateUrl: './user-current-quiz.component.html',
  styleUrls: ['./user-current-quiz.component.scss']
})
export class UserCurrentQuizComponent implements OnInit {
  @ViewChild('frame') frame: ModalDirective;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UserCurrentQuizDataSource;

  hideElement = false;
  token 
  ID
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['quizName', 'timeDuration','attemptNow'];

 constructor(private router: Router,private currentQuizService:CurrentQuizService){
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      (this.router.navigate(['home']))
  }
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      if (event.url === '/user/dashboard/currentQuizzes') {
        this.hideElement = false;
      }  else {
        this.hideElement =true;
      }
    }
  });
 }


  ngOnInit() {
    this.dataSource = new UserCurrentQuizDataSource(this.paginator, this.sort);

    this.currentQuizService.currentQuiz().subscribe((res:any)=>{
      if(res.success){
        if(res.data==undefined){
          this.dataSource.data=[]
        }
        else{
          this.dataSource.data=res.data
        }
      }else{
        window.alert(res.msg)
      }
    })
  }

  checkAttempt(quizName){
    this.currentQuizService.checkAttempt(quizName).subscribe((res:any)=>{
      if(res.success){
        if(res.data==null){
          this.frame.show()
        }else{
          window.alert(res.msg)
        }
      }else{
        window.alert(res.msg)
      }
    })
  }
}
