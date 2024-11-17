import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //injection de depens=dence 
  constructor(private auth:AuthService,private router:Router){

  }
SignIn():void{
this.auth.doGoogleLogin().then(()=>{
  this.router.navigate(["/member"]);
})
}
}
