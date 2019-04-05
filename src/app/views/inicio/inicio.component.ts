import { Component, OnInit } from '@angular/core';
import { PaginaService } from '../../services/paginas/pagina.services';
import { OcioService } from '../../services/ocio/ocio.services';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  providers: [OcioService, PaginaService]
})
export class InicioComponent implements OnInit {

  public dataDes: any = [];
  public dataPag: any = [];

  constructor(
    protected _ocioService: OcioService,
    protected _paginaService: PaginaService
  ) { }

  
  ngOnInit() {
    this.obtenerInicio();
    this.obtenerUltimaPublicacion();
  }

  obtenerInicio() {
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

}
