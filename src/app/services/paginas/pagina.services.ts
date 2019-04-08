import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { GLOBAL } from '../global';

@Injectable()
export class PaginaService {

    public url: string;

      constructor(protected _http: Http) {
         this.url = GLOBAL.url;
      }

      obtenerPost() {
         return this._http.get(this.url + 'paginas').map(res => res.json());
      }

      obtenerUltimaPublicacion() {
          return this._http.get(this.url + 'ultima_publicacion').map(res => res.json());
      }

      obtenerAutores() {
         return this._http.get(this.url + 'obtener_autores').map(res => res.json());
      }

      obtenerUltimasPublicaciones(){
          return this._http.get(this.url + 'ultimas_publicaciones').map(res => res.json());
      }

}
