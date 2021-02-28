import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Se arma el reloj y la fecha
export class AppComponent{
  title = 'Reloj';
  horaActual = null;
  hora = null;
  fecha = null;
  constructor() {
    //se coloca el intervalo de actualizacion del reloj
    setInterval(() => {
      this.horaActual = new Date();
      this.hora = this.horaActual.toLocaleTimeString();
      this.fecha = this.horaActual.toLocaleDateString();
    }, 1000);
   }
  
  ngOnInit(){};
}
