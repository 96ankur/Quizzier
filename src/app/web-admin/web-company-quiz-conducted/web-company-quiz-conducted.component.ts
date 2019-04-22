import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { WebCompanyQuizConductedDataSource } from './web-company-quiz-conducted-datasource';
import { QuizConductedService } from '../adminServices/quiz-conducted.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-admin/web-company-quiz-conducted',
  templateUrl: './web-company-quiz-conducted.component.html',
  styleUrls: ['./web-company-quiz-conducted.component.scss']
})
export class WebCompanyQuizConductedComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: WebCompanyQuizConductedDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['companyName','quizName','testDate'];
  public token

  constructor(private quizConducted:QuizConductedService,public router:Router){
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      (this.router.navigate(['home']))
      }
  }

  ngOnInit() {
    this.dataSource = new WebCompanyQuizConductedDataSource(this.paginator, this.sort);

    this.quizConducted.conductedQuiz().subscribe((res:any)=>{
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
