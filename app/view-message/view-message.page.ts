import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Message } from '../services/data.service';
import { InfoExternaService } from '../service/info-externa.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message: Message;
  comunas
  comuna
  error
  mensaje
  resultado
  fecha
  nombreRegion

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    public infoExterna: InfoExternaService,
    public loadingCtrl: LoadingController
  ) { }

  loadingInfo = true;

  
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id : " + id);

    this.resultado = this.infoExterna.obtenerRegionExterno(id);
    this.comunas = this.resultado.comunas[id];
    this.fecha = this.resultado.fecha;
    this.nombreRegion = this.resultado.comunas[id][0].REGION;
    this.loadingInfo = false;
    console.log(this.comunas);
    console.log("this.comunas");
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
