import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { School, SchoolDetails } from 'src/app/interfaces/school.interface';
import { environment } from 'src/environments/environment';
export interface Meta {
  pageCount: number;
  schoolCount: number;
}
export interface SchoolResults {
  meta: Meta;
  schools: School[];
}
@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Retrieves schools from API
   * @param page requested page
   */
  public getSchools(page: string): Observable<SchoolResults> {
    return this.http.get<SchoolResults>(`${environment.apiURL}/schools`, { params: { page } });
  }

  /**
   * Create a school
   * @param school school object
   */
  public createSchools(school: School): Observable<SchoolDetails> {
    return this.http.post<School>(`${environment.apiURL}/schools`, { body: { school } });
  }

  /**
   * Retrieves school with specified ID from API
   * @param id requested school id
   */
  public getSchoolByID(id: number): Observable<SchoolDetails> {
    return this.http.get<SchoolDetails>(`${environment.apiURL}/schools/${id}`);
  }
}
