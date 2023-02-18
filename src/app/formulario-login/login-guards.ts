import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuardian implements CanActivate{


constructor(private loginService: LoginService,private router: Router){

}



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.loginService.estaLogueado()?true:this.router.navigate(['login'])
    }



    
}
