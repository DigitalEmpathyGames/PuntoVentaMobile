import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { InfoExternaService } from '../service/info-externa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  informaciones

  constructor(private data: DataService,public infoExterna: InfoExternaService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    console.log("getMessages()");
    return this.data.getMessages();
  }

  fecha;
  loadingInfo = true;
  regiones;
  mensaje;
  error;

  ngOnInit(){
    this.fecha = Date.now();
    // console.log("moostrando algo");
    this.infoExterna.datosExternos().subscribe(
      (data)=> {
       this.loadingInfo = false;
       this.informaciones = data;
       this.fecha = this.informaciones.fecha;
       this.regiones = this.informaciones.regiones;
       this.mensaje = this.informaciones.mensaje;
       this.error = this.informaciones.error;
       console.log("La data del servidor .....");
       console.log(data);
      },
      (error)=> {console.log(error);}
    )

    console.log("datos externo ");
    // var resultado = this.infoExterna.datosExternos();
    // console.log(resultado);
    

  }
  getRegiones():[]{
    return this.regiones;
  }

  
  

}
