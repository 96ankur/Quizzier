import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UserHistoryDataSource } from './user-history-datasource';
import {UserHistoryService} from '../userServices/user-history.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user/user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild('filter') filter:ElementRef;
  dataSource: UserHistoryDataSource;
  public token

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['quizName','quizDate','totalMarks','results'];

  
  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }

  constructor(private userHistory:UserHistoryService,private router:Router){
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      (this.router.navigate(['home']))
      }
  }

  ngOnInit() {
    this.dataSource = new UserHistoryDataSource(this.paginator, this.sort);

    this.userHistory.userHistory().subscribe((res:any)=>{
      if(res.success){
        if(res.data==undefined){
          this.dataSource.data=[]
        }
        this.dataSource.data=res.data
      }else{
        window.alert(res.msg)
      }
    })
  }

}
