import { Component } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  public tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  toggleCompletion(id: string): void {
    this.taskService.toggleTaskCompletion(id);
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id);
  }
}
