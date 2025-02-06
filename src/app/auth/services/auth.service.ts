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
        // You can handle successful login here, for example saving user data or tokens
        return response;
      }),
      catchError((error) => {
        console.error('Login failed', error);
        throw error; // Optionally, you can return a fallback or an error message
      })
    );
  }

  createUser(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, { email }).pipe(
      map((response) => {
        // Handle successful user creation, e.g., show a success message or redirect
        return response;
      }),
      catchError((error) => {
        console.error('User creation failed', error);
        throw error; // Optionally, handle errors here
      })
    );
  }
}
