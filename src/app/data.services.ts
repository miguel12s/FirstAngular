import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "./formulario-login/login.service";
import { futbolista } from "./model";



@Injectable()

export class DataService {



   constructor(private httpClient:HttpClient, private loginService:LoginService){

   }


getFutbolista(){


    const token=this.loginService.getIdToken()
    console.log(token);
    
    return this.httpClient.get('https://primerproyecto-6e084-default-rtdb.firebaseio.com/datos.json?auth='+token)
}



   agregarFutbolista(futbolist:futbolista[]){


    const token=this.loginService.getIdToken()
    let url=`https://primerproyecto-6e084-default-rtdb.firebaseio.com/datos.json?auth=${token}`

    this.httpClient.put(url,futbolist).subscribe({
        next:(next)=>{console.log(next)},
        error:(error)=>{console.log(error)}
    })
}

actualizarFutbolista(indice:number,futbolista:futbolista){
    const token=this.loginService.getIdToken()
     let url=`https://primerproyecto-6e084-default-rtdb.firebaseio.com/datos/${indice}.json?auth=${token}`
     this.httpClient.put(url,futbolista).subscribe({
        next:(next)=>{console.log(next)},
        error:(error)=>{console.log(error)}
    })
}

eliminarFutbolista(indice:number){
    const token=this.loginService.getIdToken()
    let url=`https://primerproyecto-6e084-default-rtdb.firebaseio.com/datos/${indice}.json?auth=${token}`

    this.httpClient.delete(url).subscribe({
        next:(next)=>{console.log(next)},
        error:(error)=>{console.log(error)}
    })
  
}



}














    




