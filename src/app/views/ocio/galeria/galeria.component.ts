import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OcioService } from '../../../services/ocio/ocio.services';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  providers: [OcioService]
})
export class GaleriaComponent implements OnInit {

  protected val1: string;
  protected val2: string;
  public dataFoto: any = [];

  constructor(
    private rutaActiva: ActivatedRoute,
    protected _ocioService: OcioService
    ) { }

  ngOnInit() {
    this.val1 = this.rutaActiva.snapshot.params.val1;
    this.val2 = this.rutaActiva.snapshot.params.val2;
    this.obtenerGalerias(this.val1, this.val2);
  }
  obtenerGalerias(val1, val2) {
    this._ocioService.obtenerFotos(val1, val2).subscribe(
      response => {
        this.dataFoto = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
