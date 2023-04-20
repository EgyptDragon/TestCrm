import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from 'src/app/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private shortLivedToken: string | null;
  private isLogged = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {
    this.shortLivedToken = '';
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLogged.asObservable();
  }

  /**
   * Creates front session for user
   * @param longLivedToken token used to retrieve short token
   * @param shortLivedToken short lived token
   */
  createSession(longLivedToken: string, shortLivedToken: string): void {
    localStorage.setItem('longLivedToken', longLivedToken);
    this.shortLivedToken = shortLivedToken;
    this.isLogged.next(true);
  }

  /**
   * Logs user in
   * Retrieves tokens for user
   * @param auth object with user credentials
   */
  log(auth: Auth): Observable<any> {
    const email = auth.mail;
    const password = auth.password;
    return of(true)
    // return this.http.post<any>(`${environment.apiURL}/login`, {email, password});
  }

  /**
   * Logs user out
   * Removes tokens for user
   */
  logout(): void {
    localStorage.removeItem('longLivedToken');
    this.shortLivedToken = null;
    this.isLogged.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('longLivedToken');
  }

  // getShortLivedToken(): string {
  //   return this.shortLivedToken ? this.shortLivedToken : null;
  //   // TO DO : plug to api refresh-token
  // }
}
