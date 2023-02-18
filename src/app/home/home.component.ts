import { Component, OnInit } from '@angular/core';
import { futbolista } from '../model';
import { MyServiceWorkService } from '../myServiceWork.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MyServiceWorkService) {

    
  }

  ngOnInit(){

    this.empleados=this.service.empleados
    
   
  }

  setDataPlayer():void{
let miEmpleado=new futbolista(this.nombre,this.apellido,this.edad,this.precision)
console.log(miEmpleado)
this.service.saveDataPlayer(miEmpleado)
  }


nombre:string=""
apellido:string=""
edad:number=0
precision:number=0
empleados:futbolista[]=[]



}
