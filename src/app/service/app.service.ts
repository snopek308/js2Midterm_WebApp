import { Injectable } from "@angular/core";

@Injectable()

export class AppService {

    public appUser: any;

    //using local storage due to time constraints. Will NEVER do this in real life
    public setUser(user: any){
        localStorage.setItem('user', JSON.stringify(user))
    }

    public getUser(){
        this.appUser = localStorage.getItem('user');
        return JSON.parse(this.appUser);
    }

} 