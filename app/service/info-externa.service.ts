import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';

// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})






export class InfoExternaService {






  comunasObj
  resServer
  infoServer
  constructor(public http:HttpClient) { 
    console.log("constructor");
  }


  datosExternos(){
    console.log("buscando regiones");
    // this.resServer = this.http.get('https://covid.zonets.cl/obtenerRegiones');
    
    this.resServer = this.http.get('/getSucces');
    this.resServer.subscribe(
      (data)=> {
        this.infoServer = data;
        this.comunasObj = this.infoServer.comunaObj;
      },
      (error)=> {console.log(error);}
    )
    return this.resServer; 
  }


  obtenerRegionExterno(idRegion){
    // console.log(this.comunasObj);
    return this.comunasObj;
     //return this.http.get('http://201.241.83.83:3000/obtenerComunas?idRegion=' + idRegion);
  }

}
