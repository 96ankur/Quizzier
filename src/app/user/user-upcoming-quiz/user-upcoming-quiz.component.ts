import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UserUpcomingQuizDataSource } from './user-upcoming-quiz-datasource';
import { UpcomingQuizService } from '../userServices/upcoming-quiz.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user/user-upcoming-quiz',
  templateUrl: './user-upcoming-quiz.component.html',
  styleUrls: ['./user-upcoming-quiz.component.scss']
})
export class UserUpcomingQuizComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UserUpcomingQuizDataSource;
  public token

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['quizName', 'testDate'];

  constructor(private upcomingQuizService:UpcomingQuizService,private router:Router){
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      (this.router.navigate(['home']))
      }
  }


  ngOnInit() {
    this.dataSource = new UserUpcomingQuizDataSource(this.paginator, this.sort);


    this.upcomingQuizService.upcomingtQuiz().subscribe((res:any)=>{
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
}
