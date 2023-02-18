import { Component, OnInit } from '@angular/core';
import {NavigationStart, ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.services';
import { futbolista } from '../model';
import { MyServiceWorkService } from '../myServiceWork.service';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})


export class ActualizarComponent implements OnInit {
  subscription:any;
    
  constructor(private serviceWork:MyServiceWorkService,private router:Router,private activedRouter:ActivatedRoute,private dataService:DataService){
  
  }


   
  
  
  
  
   ngOnInit(): void {
    this.indice= this.activedRouter.snapshot.params['id']
    this.accion= this.activedRouter.snapshot.queryParams['accion']

  if (this.accion==1){
    this.mensaje="actualizar"
    
  }else{
   this.mensaje='eliminar'
  }
  this.miFutbolista=this.serviceWork.filterPlayer(this.indice)
 
 this.nombre=this.miFutbolista.nombre
 this.apellido=this.miFutbolista.apellido
 this.precision=this.miFutbolista.precision
 this.edad=this.miFutbolista.edad
   }
  


  setPlayer(){


if (this.accion==1){
  let miEmpleado= new futbolista(this.nombre,this.apellido,this.edad,this.precision)
  this.serviceWork.updatePlayer(miEmpleado,this.indice)
 
  this.router.navigate([''])
 
}else{
this.serviceWork.deleteEmployee(this.indice)
  this.router.navigate([''])


}




  
  }


  
  nombre:string=""
  apellido:string=""
  edad:number=0
  precision:number=0
  futbolistas:futbolista[]=[]
  indice:number=0
  accion:number=0
  mensaje:string=""
miFutbolista:any

 

}
