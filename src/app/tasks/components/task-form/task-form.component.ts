import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  title: string = '';
  description: string = '';

  constructor(private taskService: TaskService) {}

  onAddTask() {
    const task = {
      id: Date.now().toString(),
      title: this.title,
      description: this.description,
      createdAt: new Date().toLocaleString(),
      userId: '1',
      completed: false,
    };

    this.taskService.addTask(task);
    this.title = '';
    this.description = '';
  }
}
