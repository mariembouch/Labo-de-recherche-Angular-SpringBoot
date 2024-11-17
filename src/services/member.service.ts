import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Modeles/Member';
//qst entretien que faire injectable:décorateur qui permet d'injecter le servises dans les composants service fih @injectable et on creant une instance proivé dans le constructeur de composant 
@Injectable({
  providedIn: 'root'
})
export class MemberService {
constructor(private http:HttpClient){}
nbmemebers:number=0;

  getAllMembers():Observable<Member[]>
  {
    //envoyer une requette http vers la base de donnée
    return this.http.get<Member[]>('http://localhost:3000/members')

  }
  add(m:Member):Observable<void>
  {
    return this.http.post<void>('http://localhost:3000/members',m)
  }
  deletMemeber(id:string):Observable<void>
  {
    return this.http.delete<void>(`http://localhost:3000/members/${id}`)
  }
  getMemberById(id:string):Observable<Member>
  {
    return this.http.get<Member>(`http://localhost:3000/members/${id}`)

  }
  updateMember(id:string,m:Member):Observable<void>
  {
    return this.http.put<void>(`http://localhost:3000/members/${id}`,m);

}
compterNbMembers():number
{
this.getAllMembers().subscribe((data)=>{this.nbmemebers=data.length;})
return this.nbmemebers;
}}
