import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Meta {
  // TO DO : pageCount : number;
  // TO DO : frontUsersCount: number;
  pageNumber: any;
}
export interface FrontUserResults {
  // TO DO : meta: Meta;
  // TO DO : frontUsers: FrontUser[];
  numberOfPages: number;
  users: any[];
}
@Injectable({
  providedIn: 'root'
})
export class FrontUsersService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Retrieves frontUsers from API
   * @param page requested page
   * @param query search filter
   */
  public getFrontUsers(page: string, filter: string = ''): Observable<FrontUserResults> {
    let requestParams = new HttpParams().set('page', page);
    if (filter) {
        requestParams = new HttpParams().set('page', page).set('query', filter);
    }
    return this.http.get<FrontUserResults>(`${environment.apiURL}/front-users`, { params: requestParams });
  }
}
