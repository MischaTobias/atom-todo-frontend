import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  standalone: false,
  template: `
    <h1 mat-dialog-title>Information</h1>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
})
export class UserDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
