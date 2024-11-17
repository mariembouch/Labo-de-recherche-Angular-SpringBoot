import { Component } from '@angular/core';
import { Evt } from 'src/Modeles/Event';
import { EvtServiceService } from 'src/services/evt-service.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
dataSource:Evt[]=[]
constructor(private Es:EvtServiceService,private dialog:MatDialog){

}
ngOnInit():void{this.Es.getAllEvent().subscribe((data)=>{this.dataSource=data;})}
displayedColumns: string[] = ['1', '2', '3', '6','4','7'];
open():void{
  const dialogRef= this.dialog.open(ModalComponent)

  dialogRef.afterClosed().subscribe(data=>{if(!data){this.Es.createEvent(data).subscribe(()=>{
      //mettre a jour le tableau des events 
      this.Es.getAllEvent().subscribe((data)=>{this.dataSource=data;})}
  )}});    
}
}
