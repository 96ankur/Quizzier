import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { WebCompanyQuizPendingDataSource } from './web-company-quiz-pending-datasource';
import { QuizPendingService } from '../adminServices/quiz-pending.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-admin/web-company-quiz-pending',
  templateUrl: './web-company-quiz-pending.component.html',
  styleUrls: ['./web-company-quiz-pending.component.scss']
})
export class WebCompanyQuizPendingComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: WebCompanyQuizPendingDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['companyName', 'quizName', 'testDate'];
  public token

  constructor(private quizPending:QuizPendingService,public router:Router){
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      (this.router.navigate(['home']))
      }
  }

  ngOnInit() {
    this.dataSource = new WebCompanyQuizPendingDataSource(this.paginator, this.sort);

    this.quizPending.pendingQuiz().subscribe((res:any)=>{
      if(res.success){
        if(res.data==undefined){
          this.dataSource.data=[]
        }else{
          this.dataSource.data=res.data
        }
      }else{
        window.alert(res.msg)
      }
    })
  }
}

