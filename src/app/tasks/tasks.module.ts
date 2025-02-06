import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskFormComponent, TaskItemComponent, TaskListComponent],
  imports: [CommonModule, TasksRoutingModule, FormsModule],
})
export class TasksModule {}
