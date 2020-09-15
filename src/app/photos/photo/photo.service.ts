import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";


const API = "http://192.168.0.108:3000"

@Injectable({providedIn: 'root'})

export class PhotoService {
    constructor(private http: HttpClient) {}

    ListFromUser(userName: string) {

       return this.http.get<Photo[]>(API + '/flavio/photos')

    }

    
}