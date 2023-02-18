import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './formulario-login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'PracticaCardsAngular';
token:string=""
  constructor(private loginService: LoginService){

  }

  ngOnInit(){
  
    firebase.initializeApp({

      apiKey: "AIzaSyCuMoC9iXFAjbzX8rPFczpiIuyVTIR3wwo",
      authDomain: "primerproyecto-6e084.firebaseapp.com",
      }   
      )
  
  }



  obtenerToken(){
    return this.loginService.estaLogueado()
  }

  logout(){
    this.loginService.logout()
  }





}
