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

     obtenerGalerias() {
        return this._http.get(this.url + 'galerias').map(res => res.json());
     }

     obtenerFotos(cod) {
        return this._http.get(this.url + 'obtener_fotos/' + cod).map(res => res.json());
     }

     obtenerDestacados() {
      return this._http.get(this.url + 'obtener_destacados').map(res => res.json());
     }

}
