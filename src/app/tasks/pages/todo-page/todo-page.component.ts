import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../../models/Task';
import { UserDialogComponent } from '../../../components/user-dialog/user-dialog.component';
import { TaskService } from '../../../services/tasks/task.service';
import { TaskFormComponent } from '../../components/task-form/task-form.component';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.refreshTasks();
  }

  createTask(task: Task): void {
    this.taskService.addTask(task).subscribe({
      next: () => {
        this.refreshTasks();
      },
      error: (err) => {
        console.error('Error during task creation: ', err);
        this.dialog.open(UserDialogComponent, {
          data: { message: 'Oops! Something went wrong.' },
        });
      },
    });
  }

  refreshTasks() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
      error: (err) => {
        this.dialog.open(UserDialogComponent, {
          data: { message: 'Oops! Something went wrong.' },
        });
      },
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '90%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createTask(result);
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
