import { Injectable } from "@angular/core";

@Injectable()

export class AppService {

    public appUser: any;

    public setUser(user: any){
        this.appUser = user;
    }

    public getUser(){
        return this.appUser;
    }

} 