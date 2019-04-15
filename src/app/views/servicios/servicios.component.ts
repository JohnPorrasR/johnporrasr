import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicios/servicio.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  providers: [ServicioService]
})
export class ServiciosComponent implements OnInit {

  public dataSer: any = [];

  constructor(
    protected _servicioService: ServicioService
  ) { }

  ngOnInit() {
    this.obtenerInicio();
  }
  obtenerInicio() {
    this._servicioService.obtenerServicios().subscribe(
      response => {
        this.dataSer = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
