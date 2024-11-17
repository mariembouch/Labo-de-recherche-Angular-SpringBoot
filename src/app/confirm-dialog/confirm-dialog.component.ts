import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})

export class ConfirmDialogComponent {
  //FORCAGE DE TYPE HATYTHA MODAMLE OBLIGATOIREMENT
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }
}
