import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
   //FORCAGE DE TYPE HATYTHA MODAMLE OBLIGATOIREMENT
   constructor(public dialogRef: MatDialogRef<ModalComponent>) { }
form!:FormGroup;
save() {
  this.dialogRef.close(this.form.value);
}

close() {
  this.dialogRef.close();
}
ngOnInit()
{
  this.initForm()
}
initForm():void{
  this.form=new FormGroup({Titre:new FormControl(null),Lieu:new FormControl(null),DateDebut:new FormControl(null),DateFin:new FormControl(null)}
)
}
}
