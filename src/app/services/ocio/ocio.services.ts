import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { GLOBAL } from '../global';

@Injectable()
export class OcioService {

    public url: string;

    constructor(protected _http: Http) {
        this.url = GLOBAL.url;
     }

     obtenerEtiquetasGalerias() {
         return this._http.get(this.url + 'etiquetas_galerias').map(res => res.json());
     }

     obtenerDepartamentos() {
        return this._http.get(this.url + 'galerias').map(res => res.json());
     }

     obtenerDistritos(val) {
        return this._http.get(this.url + 'obtener_distritos/' + val).map(res => res.json());
     }

     obtenerFotos(val1, val2) {
        return this._http.get(this.url + 'obtener_fotos/' + val1 + '/' + val2).map(res => res.json());
     }

     obtenerDestacados() {
      return this._http.get(this.url + 'obtener_destacados').map(res => res.json());
     }

}
