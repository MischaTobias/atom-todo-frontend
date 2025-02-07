import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable } from 'rxjs';
import { Task } from '../../tasks/models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = `${environment.apiUrl}/tasks`;
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        console.error('Request for tasks failed', error);
        throw error;
      })
    );
  }

  addTask(task: Task): Observable<any> {
    return this.http.post<any>(this.apiUrl, task).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        console.error('Task creation failed', error);
        throw error;
      })
    );
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${task.id}`, task).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        console.error('Task update failed', error);
        throw error;
      })
    );
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        console.error('Task deletion failed', error);
        throw error;
      })
    );
  }
}
