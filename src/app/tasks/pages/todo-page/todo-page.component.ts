import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../../../auth/components/user-dialog/user-dialog.component';
import { TaskService } from '../../../services/tasks/task.service';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        console.log('tenemos taskss: ', { tasks });

        this.tasks = tasks;
      },
      error: (err) => {
        this.dialog.open(UserDialogComponent, {
          data: { message: 'Oops! Something went wrong.' },
        });
      },
    });
  }

  createTask(task: Task): void {
    console.log('Task created: ', task);

    this.taskService.addTask(task).subscribe({
      next: () => {
        this.tasks.push(task);
      },
      error: (err) => {
        console.error('Error during task creation: ', err);
        this.dialog.open(UserDialogComponent, {
          data: { message: 'Oops! Something went wrong.' },
        });
      },
    });
  }
}
