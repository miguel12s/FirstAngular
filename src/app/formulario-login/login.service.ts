import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router,private cookieService:CookieService) { }

  token: string = ""


  login(email: string, password: string): void {

    firebase.auth().signInWithEmailAndPassword(email, password).then(

      response => {

        firebase.auth().currentUser?.getIdToken().then(

          token => {
            this.token = token;
            this.cookieService.set('token',token)
            this.router.navigate(['/'])

          }

        )

      }





    )

  }

  getIdToken(){
    return this.cookieService.get('token')
  }

  estaLogueado(){
    return this.cookieService.get('token')
  }

  logout(){
    firebase.auth().signOut().then(

      ()=>{
this.cookieService.set('token','')
this.router.navigate(['/login'])

      })
  }


}
