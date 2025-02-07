import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() onTaskModified = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  modifyTask(task: Task): void {
    this.taskService.updateTask(task).subscribe((res) => {
      this.onTaskModified.emit();
    });
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id).subscribe((res) => {
      this.onTaskModified.emit();
    });
  }
}
