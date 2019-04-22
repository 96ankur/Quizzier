import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { CompanyResultDataSource } from './company-result-datasource';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company/company-result',
  templateUrl: './company-result.component.html',
  styleUrls: ['./company-result.component.scss']
})
export class CompanyResultComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: CompanyResultDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['studentId','studentName','totalMarks','marksObtained'];

  public token

  constructor(private router:Router){
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      // window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
      (this.router.navigate(['home']))
      }
  }

  ngOnInit() {
    this.dataSource = new CompanyResultDataSource(this.paginator, this.sort);
  }
}
