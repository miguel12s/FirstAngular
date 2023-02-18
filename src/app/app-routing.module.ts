import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { LoginGuardian } from './formulario-login/login-guards';
const routes: Routes = [

 {path: 'home', component: HomeComponent},
 {path:'noticias', component: NoticiasComponent,canActivate:[LoginGuardian]},

 {path:'actualizar/:id',component: ActualizarComponent},
 {path:'',component: AgregarComponent},
 {path:'login',component:FormularioLoginComponent},
 {path:'**',pathMatch:'full',component:NoticiasComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
