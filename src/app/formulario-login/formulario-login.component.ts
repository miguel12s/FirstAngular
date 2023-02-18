import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import firebase from 'firebase/compat/app';
import { LoginService } from './login.service';
@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit  {

constructor(private loginService: LoginService){
  
}




ngOnInit(): void {
  firebase.initializeApp({

  apiKey: "AIzaSyCuMoC9iXFAjbzX8rPFczpiIuyVTIR3wwo",
  authDomain: "primerproyecto-6e084.firebaseapp.com",
  }   
  )
}

login(form:NgForm){
  console.log(form.value);
  
  const email=form.value.correo
  console.log(email);
  
  const password=form.value.contraseña
 
  console.log(email,password)
  this.loginService.login(email,password)

}



}
