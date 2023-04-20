import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public sources = [
    'SOURCE_20_RUBIES',
    'SOURCE_3_RUBIES',
    'SOURCE_3_RUBIES_DESKTOP',
    'SOURCE_3_RUBIES_APP',
    'SOURCE_ASK_PARENT_EMAIL',
    'SOURCE_ASK_PARENT_SMS',
    'SOURCE_PARENT_TO_RECALL',
    'SOURCE_PARENT_TO_RECALL_ONBOARDING',
    'SOURCE_AFTER_REGISTRATION',
    'parent_to_call_dashboard',
    'parent_to_call_dashboard_popup',
    'parent_formulaire_inscription',
    'aircall',
    'parent_personal_information',
    'parent_preferences_contact'
  ];

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Retrieves status list from API
   */
  public getStatusList(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiURL}/status`);
  }

  // TO DO : get from api
  /**
   * Returns sources list
   */
  public getSources(): Observable<string[]> {
    return of(this.sources);
  }


}
