import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

@Output() añadircaracteristicas = new EventEmitter<string>();

 ngOnInit(): void {
   
 }

 setCaracter(caracteristica:string):void{
this.añadircaracteristicas.emit(caracteristica)
 }
}
