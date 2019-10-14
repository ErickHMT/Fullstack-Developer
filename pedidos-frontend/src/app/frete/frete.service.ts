import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class FreteService {

    private URL = 'http://localhost:8083';

    constructor(private http: HttpClient) { }

    getValorFrete(qtdItens) {
        return this.http
            .get(`${this.URL}/admin/frete/${qtdItens}`);
    }

}