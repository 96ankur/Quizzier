import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {UserHistoryItem} from '../quizInterfaces'


// TODO: Replace this with your own data model type


// TODO: replace this with real data from your application
// const EXAMPLE_DATA: UserHistoryItem[] = [
//   {quizName:'ABC',quizDate:'2-3-18',totalMarks:300,marksObtained:100,highestMarks:250 },
//   {quizName:'CBA',quizDate:'3-3-18',totalMarks:400,marksObtained:200,highestMarks:350 },
  
// ];

/**
 * Data source for the UserHistory view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UserHistoryDataSource extends DataSource<UserHistoryItem> {
  data: UserHistoryItem[] //= EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<UserHistoryItem[]> {
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
  private getPagedData(data: UserHistoryItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: UserHistoryItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'quizName': return compare(a.quizName, b.quizName, isAsc);
        case 'quizDate': return compare(+a.quizDate, +b.quizDate, isAsc);
        case 'totalMarks': return compare(+a.totalMarks, +b.totalMarks, isAsc);
        case 'results': return compare(+a.results, +b.results, isAsc);
        // case 'highestMarks': return compare(+a.highestMarks, +b.highestMarks, isAsc);
        
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
