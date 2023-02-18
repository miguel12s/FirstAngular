import { Component,OnInit } from '@angular/core';
import { futbolista } from '../model';
import { MyServiceWorkService } from '../myServiceWork.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})


export class AgregarComponent implements OnInit {


constructor(private serviceWork:MyServiceWorkService){
  

  }




 ngOnInit(): void {
 this.serviceWork.obtenerFutbolista().subscribe({
  next:(next)=>{console.log(next)
  this.futbolistas=Object.values(next)
  this.serviceWork.guardarArray(this.futbolistas)
  
  },
  error:(error)=>{console.log(error)}
})



 
}

setPlayer(){
let miEmpleado= new futbolista(this.nombre,this.apellido,this.edad,this.precision)
this.serviceWork.message(`el usuario con el nombre${this.nombre} ${this.apellido} ${this.edad} ${this.precision}`,miEmpleado)
}

nombre:string=""
apellido:string=""
edad:number=0
precision:number=0
futbolistas:futbolista[]=[]



}
