import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { GLOBAL } from '../global';

@Injectable()
export class ServicioService {

    public url: string;

    constructor(protected _http: Http) {
        this.url = GLOBAL.url;
     }

     obtenerServicios() {
         return this._http.get(this.url + 'servicios').map(res => res.json());
     }

     obtenerServiciosMae() {
         return this._http.get(this.url + 'obtener_servicios_mae').map(res => res.json());
     }

}
