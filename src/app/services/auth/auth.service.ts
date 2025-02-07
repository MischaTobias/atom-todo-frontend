import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  login(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${email}`).pipe(
      map((response) => {
        if (response.jwt) {
          localStorage.setItem('token', response.jwt);
        }
        return response;
      }),
      catchError((error) => {
        console.error('Login failed', error);
        throw error;
      })
    );
  }

  createUser(email: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email }).pipe(
      map((response) => {
        if (response.status === 200 && response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
        return response;
      }),
      catchError((error) => {
        console.error('User creation failed', error);
        throw error;
      })
    );
  }
}
