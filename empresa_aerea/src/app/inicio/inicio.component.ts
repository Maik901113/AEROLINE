import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  origen: string = '';
  destino: string = '';
  fechaIda: string = '';
  fechaVuelta: string = '';
  pasajeros: number = 0;
  mostrarError: boolean = false;

  buscarVuelos() {
    if (!this.origen || !this.destino || !this.fechaIda || !this.pasajeros) {
      this.mostrarError = true;
    } else {
      
      alert("\u2705 Busqueda: \n    Origen: "+this.origen+"\n    Destino: "+ this.destino+ "\n    Fecha de Ida: "+this.fechaIda+"\n    Fecha de Vuelta: "+this.fechaVuelta+"\n    Cantidad de pasajeros: "+this.pasajeros+"\n\n\u231bBuscando vuelos...\u2708")

      alert("\u274cNo hemos encontrado vuelos similaes\u274c")
    }
  }
}