import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/Modeles/Event';

@Injectable({
  providedIn: 'root'
})
export class EvtServiceService {

  constructor(private http:HttpClient) { }
  getAllEvent():Observable<Evt[]>{
    return this.http.get<Evt[]>('http://localhost:3000/Evt');
  }
  createEvent(Evt:Event):Observable<void>{
    return this.http.post<void>('http://localhost:3000/Evt',Evt);
  }
}
