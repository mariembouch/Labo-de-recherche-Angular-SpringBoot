import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{
constructor(private MS:MemberService ,private dialog:MatDialog){}
//saisir le tableau 
dataSource:Member[]=[]
displayedColumns: string[] = ['1', '2', '3', '4','5','6','7'];
//une fonction qui se lancer automatiquement lors de la chargement de la page 
ngOnInit():void
{

//appeler la fonction du service getAllMembers
//subscribe(()=>{}) : ():hetha yji fi westo data li jet west service ....{}:nhot fi action li nheb namelha bad matjini resultat
this.MS.getAllMembers().subscribe((data)=>{this.dataSource=data})
}
delet(id:string):void
{
  
  //lancer la boite 
  //attente la resultat du click
  //si click=ok =>
  let dialogRef = this.dialog.open(ConfirmDialogComponent, {
    height: '260px',
    width: '300px',
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result){
      this.MS.deletMemeber(id).subscribe(()=>{this.MS.getAllMembers().subscribe((data)=>{this.dataSource=data})
  //si non 
})}
    
  });
  
}
}
