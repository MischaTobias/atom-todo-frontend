import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  title: string = '';
  description: string = '';

  @Output() onAddTask = new EventEmitter<Task>();

  constructor() {}

  submit() {
    console.log('Task submitted: ', this.title, this.description);

    const task: Task = {
      title: this.title,
      description: this.description,
    };

    this.onAddTask.emit(task);
    this.title = '';
    this.description = '';
  }
}
