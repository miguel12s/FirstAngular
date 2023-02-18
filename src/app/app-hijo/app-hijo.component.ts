import { Component, OnInit, Input } from '@angular/core';
import { MyServiceWorkService } from '../myServiceWork.service';

@Component({
  selector: 'app-app-hijo',
  templateUrl: './app-hijo.component.html',
  styleUrls: ['./app-hijo.component.css']
})
export class AppHijoComponent implements OnInit {

@Input() futbolista:any
@Input()indice:number=0


array:string[]=[]
  constructor(private serviceWork:MyServiceWorkService) {


   }

  ngOnInit(): void {
 
  }

addCaracter(caracteristica:string):void{
this.array.push( caracteristica)
  }

}
