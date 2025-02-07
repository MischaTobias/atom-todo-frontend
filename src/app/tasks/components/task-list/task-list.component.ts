import { Component, Input } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../../services/tasks/task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  toggleCompletion(task: Task): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task);
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id);
  }
}
