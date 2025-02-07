import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskFormComponent } from '../task-form/task-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() modified = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<string>();

  constructor(private dialog: MatDialog) {}

  onToggle() {
    this.task.completed = !this.task.completed;
    this.modified.emit(this.task);
  }

  onDelete() {
    this.delete.emit(this.task.id);
  }

  editTaskModal() {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '90%',
      data: {
        title: this.task.title,
        description: this.task.description,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.task.title = result.title;
        this.task.description = result.description;
        this.modified.emit(this.task);
      }
    });
  }
}
