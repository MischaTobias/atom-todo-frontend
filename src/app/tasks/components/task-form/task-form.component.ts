import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Task } from '../../models/Task';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  title: string = '';
  description: string = '';
  isEditing: boolean = false;

  @Output() onAddTask = new EventEmitter<Task>();

  constructor(
    public dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; description: string }
  ) {
    if (data) {
      this.title = data.title;
      this.description = data.description;
      this.isEditing = true;
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close({ title: this.title, description: this.description });
  }
}
