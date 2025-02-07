import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [
    TaskFormComponent,
    TaskItemComponent,
    TaskListComponent,
    TodoPageComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
})
export class TasksModule {}
