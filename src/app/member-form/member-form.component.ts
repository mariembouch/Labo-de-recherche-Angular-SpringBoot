import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

constructor(private MS:MemberService, private router:Router,private activatedRoute:ActivatedRoute){}
form!:FormGroup;

ngOnInit(){


  ///chercher la route active
    ///chercher l'id d  ns la route 

const idCourant=this.activatedRoute.snapshot.params['id']
  ///chercher l'id d  ns la route 
if(!!idCourant){//si existe and fiha valeur
  ///if id existe ->edit
  this.MS.getMemberById(idCourant).subscribe((member)=>{  this.form=new FormGroup({
    cin:new FormControl(member.cin,[Validators.required]),
    name:new FormControl(member.name,[Validators.required]),
    cv:new FormControl(member.cv,[Validators.required]),
    type:new FormControl(member.type,[Validators.required])
  })})

}
else{
  // sinon create

   this.form=new FormGroup({
    cin:new FormControl(null,[Validators.required]),
    name:new FormControl(null,[Validators.required]),
    cv:new FormControl(null,[Validators.required]),
    type:new FormControl(null,[Validators.required])
  })



}
}
sub():void
{
  const idCourant=this.activatedRoute.snapshot.params['id']
if (!!idCourant){
const m :Member=this.form.value
const x={...this.form.value,createDate:new Date().toISOString()}
this.MS.updateMember(idCourant,x).subscribe(()=>{
  this.router.navigate([''])//hnaaa
  })
}
  //recuperer les données
  else{console.log(this.form.value);
  //appeler la fonction service
  const x={...this.form.value,createDate:new Date().toISOString()}
this.MS.add(x).subscribe(()=>{
  this.router.navigate(['/member'])
  })

}}
}
