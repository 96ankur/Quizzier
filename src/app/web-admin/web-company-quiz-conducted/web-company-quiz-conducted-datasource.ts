import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {WebCompanyQuizConductedItem} from '../adminInterfaces'

// TODO: Replace this with your own data model type


// TODO: replace this with real data from your application
const EXAMPLE_DATA: WebCompanyQuizConductedItem[] = [
  {companyName:'PIET',quizName:'SOT1', testDate:'12-12-12'},
  {companyName:'IIT',quizName:'SOT2', testDate:'13-12-12'},
  {companyName:'ZenwaysT',quizName:'SOT3', testDate:'11-12-12'}
];

/**
 * Data source for the WebCompanyQuizConducted view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class WebCompanyQuizConductedDataSource extends DataSource<WebCompanyQuizConductedItem> {
  data: WebCompanyQuizConductedItem[] //= EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<WebCompanyQuizConductedItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: WebCompanyQuizConductedItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: WebCompanyQuizConductedItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'companyName': return compare(a.companyName, b.companyName, isAsc);
        case 'quizName': return compare(+a.quizName, +b.quizName, isAsc);
        case 'testDate': return compare(+a.testDate, +b.testDate, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
