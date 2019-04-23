import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OcioService } from '../../../services/ocio/ocio.services';

@Component({
  selector: 'app-distritos',
  templateUrl: './distritos.component.html',
  providers: [OcioService]
})
export class DistritosComponent implements OnInit {

  protected val: string;
  public dataOcio: any = [];

  constructor(
    private rutaActiva: ActivatedRoute,
    protected _ocioService: OcioService
  ) {}

  ngOnInit() {
    this.val = this.rutaActiva.snapshot.params.val;
    this.obtenerGalerias(this.val);
  }
  obtenerGalerias(val) {
    this._ocioService.obtenerDistritos(val).subscribe(
      response => {
        this.dataOcio = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
