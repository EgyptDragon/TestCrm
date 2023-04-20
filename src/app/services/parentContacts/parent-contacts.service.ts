import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// export interface Meta {
// TO DO : pageCount : number;
// TO DO : frontUsersCount: number;
// }
export interface ParentContactResults {
  // TO DO : meta: Meta;
  // TO DO : frontUsers: FrontUser[];
  numberOfPages: number;
  parentContacts: any[];
}
@Injectable({
  providedIn: 'root'
})
export class ParentContactsService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Retrieves parentContacts from API
   * @param page requested page
   * @param query search filter
   */
  public getParentContacts(page: string, filter: string = ''): Observable<ParentContactResults> {
    let requestParams = new HttpParams().set('page', page);
    if (filter) {
        requestParams = new HttpParams().set('page', page).set('query', filter);
    }
    return this.http.get<ParentContactResults>(`${environment.apiURL}/parent-contacts`, { params: requestParams });
  }
}
