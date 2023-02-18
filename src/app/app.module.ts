import { NgModule, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { FormsModule } from '@angular/forms';
import { AppHijoComponent } from './app-hijo/app-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { MyServiceWorkService } from './myServiceWork.service';
import { DataService } from './data.services';
import {HttpClientModule } from '@angular/common/http';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { LoginService } from './formulario-login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './formulario-login/login-guards';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoticiasComponent,
    AgregarComponent,
    ActualizarComponent,
    AppHijoComponent,
    CaracteristicasEmpleadoComponent,
    FormularioLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
  ],
  providers: [MyServiceWorkService,DataService,LoginService,CookieService,LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
