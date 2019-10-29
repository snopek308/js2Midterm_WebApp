import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

//This page is to set up using the Firebase Database in my code.
export class DataRepositoryService {

    // this is the apiURL for Firebase
    private apiUrl: string = 'AIzaSyDXqAYcerrj3t45L7VXfSMzg7XLtFe_iC0'

    //this constructor is for the HttpClient
    constructor(private http: HttpClient){

    }

    //
    private getHttpHeaders(){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');

        return headers;
    }

    //these are setting up the get and post requests for the database
    public getRequest(uri: string){
        return this.http.get(this.apiUrl + uri, {headers: this.getHttpHeaders() })
    }

    public postRequest(uri: any, data: any){
        return this.http.post(this.apiUrl + uri, data, {headers: this.getHttpHeaders()})
    }

    // TODO: add call for PUT and DELETE requests


} 