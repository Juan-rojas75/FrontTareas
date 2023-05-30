import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
private dominioURL =  "http://localhost:8000/"

  constructor( private http: HttpClient ) { }

  //GET
  public getMovimientos(ruta:string){
    return this.http.get<any>(this.dominioURL + ruta , this.httpOptions);
  }
  //POST
  public postMovimiento(newMovimiento:any,ruta:string){
      return this.http.post<any>(this.dominioURL+ruta ,newMovimiento, this.httpOptions);
  }

}
