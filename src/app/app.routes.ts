import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./tasks/tasks.module').then((m) => m.TasksModule),
  },
  { path: '**', redirectTo: 'login' },
];
