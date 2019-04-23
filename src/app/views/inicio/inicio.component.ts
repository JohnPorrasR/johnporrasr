import { Component, OnInit } from '@angular/core';
import { InicioService } from '../../services/inicio/inicio.services';
import { PaginaService } from '../../services/paginas/pagina.services';
import { OcioService } from '../../services/ocio/ocio.services';
import { ServicioService } from '../../services/servicios/servicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [InicioService, OcioService, PaginaService, ServicioService]
})
export class InicioComponent implements OnInit {

  public dataIni: any = [];
  public dataDes: any = [];
  public dataPag: any = [];
  public dataUlPag: any = [];
  public dataServMae: any = [];

  constructor(
    protected _inicioService: InicioService,
    protected _ocioService: OcioService,
    protected _paginaService: PaginaService,
    protected _servicioService: ServicioService
  ) { }

  ngOnInit() {
    this.obtenerIncio();
    this.obtenerDestacados();
    this.obtenerUltimaPublicacion();
    this.obtenerUltimasPublicaciones();
    this.obtenerServiciosMae();
  }

  obtenerIncio() {
    this._inicioService.obtenerInicio().subscribe(
      response => {
        this.dataIni = response.data;
        console.log(this.dataIni);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  obtenerDestacados() {
    this._ocioService.obtenerDestacados().subscribe(
      response => {
        this.dataDes = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  obtenerUltimaPublicacion() {
    this._paginaService.obtenerUltimaPublicacion().subscribe(
      response => {
        this.dataPag = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  obtenerUltimasPublicaciones() {
    this._paginaService.obtenerUltimasPublicaciones().subscribe(
      response => {
        this.dataUlPag = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  obtenerServiciosMae() {
    this._servicioService.obtenerServiciosMae().subscribe(
      response => {
        this.dataServMae = response.data;
        console.log(response.data.tipos);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
