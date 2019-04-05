import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { GLOBAL } from '../global';

@Injectable()
export class TendenciasService {

    public url: string;

    constructor(protected _http: Http) {
        this.url = GLOBAL.url;
     }

     obtenertendencias() {
         return this._http.get(this.url + 'tendencias').map(res => res.json());
     }

}
