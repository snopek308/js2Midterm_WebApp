import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AppService } from '../service/app.service';

@Injectable()
export class AppGuard implements CanActivate {

    public user: any = null;

    constructor(private appService: AppService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise <any> {
        return new Promise(async (resolve) => {
            try {
                console.log('App Guard');
                this.user = await this.appService.getUser();
                console.log(this.user);
                if(this.user){
                    resolve(true);
                } else {
                    this.router.navigate(['/login'])
                    resolve(false);
                }
            } catch (e) {
                this.router.navigate(['/login'])
                resolve(false);
            }
        });
        
    }

}