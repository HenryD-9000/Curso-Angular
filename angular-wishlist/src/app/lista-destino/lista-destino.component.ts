import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.models';

@Component({
  selector: 'app-lista-destino',
  templateUrl: './lista-destino.component.html',
  styleUrls: ['./lista-destino.component.css']
})
export class ListaDestinoComponent implements OnInit {
  destinos: DestinoViaje[];
  constructor() { 
    this.destinos = [];
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string): boolean{
    this.destinos.push(new DestinoViaje(nombre, url))
    console.log(this.destinos);
    return false;
  }

  elegido(d: DestinoViaje) {
    this.destinos.forEach(function (m) { m.setSelected(false) });
    d.setSelected(true);
  }

}
