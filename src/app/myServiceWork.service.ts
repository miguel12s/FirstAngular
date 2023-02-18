import { futbolista } from "./model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.services";


@Injectable({
  providedIn:"root"
})
export class MyServiceWorkService {



  constructor(private dataService:DataService){}

empleados:futbolista[]=[];

saveDataPlayer(empleado:futbolista):void
{

  this.empleados.push(empleado)


}

obtenerFutbolista(){
  return this.dataService.getFutbolista()
}




message(message:string, miFutbolista:futbolista):void
{

alert(message)
this.empleados.push(miFutbolista)
this.dataService.agregarFutbolista(this.empleados)

}

filterPlayer( indice:number):futbolista{return this.empleados[indice-1]}

updatePlayer(futbolista:futbolista,indice:number):void{
  indice-=1
 let  Futbol=this.empleados[indice]

 Futbol.nombre=futbolista.nombre
 Futbol.apellido=futbolista.apellido
Futbol.edad=futbolista.edad
Futbol.precision=futbolista.precision
this.dataService.actualizarFutbolista(indice,futbolista)


  
}

deleteEmployee(indice:number):void{
this.empleados.splice(indice-1,1)
this.dataService.eliminarFutbolista(indice)
this.dataService.agregarFutbolista(this.empleados)


}

guardarArray(futbolista:futbolista[]){
  this.empleados=futbolista
}





}


