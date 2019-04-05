import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { GLOBAL } from '../global';

@Injectable()
export class InicioService {
    public url: string;

    constructor(protected _http: Http) {
        this.url = GLOBAL.url;
    }

    obtenerInicio() {
        return this._http.get(this.url + 'inicio').map(res => res.json());
    }

}
