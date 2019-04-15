import { Component, OnInit } from '@angular/core';
import { OcioService } from '../../../services/ocio/ocio.services';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  providers: [OcioService]
})
export class DepartamentosComponent implements OnInit {

  public dataOcio: any = [];

  constructor(
    protected _ocioService: OcioService
  ) {}

  ngOnInit() {
    this.obtenerGalerias();
  }
  obtenerGalerias() {
    this._ocioService.obtenerGalerias().subscribe(
      response => {
        this.dataOcio = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
