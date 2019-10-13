import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class DataRepositoryService {

    // TODO - change out for firebase url
    private apiUrl: string = 'http://northwind.cooneycreative.net'

    constructor(private http: HttpClient){

    }

    private getHttpHeaders(){
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');

        return headers;
    }

    public getRequest(uri: string){
        return this.http.get(this.apiUrl + uri, {headers: this.getHttpHeaders() })
    }

    public postRequest(uri: any, data: any){
        return this.http.post(this.apiUrl + uri, data, {headers: this.getHttpHeaders()})
    }

    // TODO: add call for PUT and DELETE requests


} 