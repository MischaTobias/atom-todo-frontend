import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() toggle = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  constructor() {}

  onToggle() {
    this.toggle.emit(this.task.id);
  }

  onDelete() {
    this.delete.emit(this.task.id);
  }
}
