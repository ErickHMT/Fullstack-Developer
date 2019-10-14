import { URL } from './../api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FreteService {
    constructor(private http: HttpClient) { }

    getValorFrete(qtdItens) {
        return this.http
            .get(`${URL}/frete/${qtdItens}`);
    }
}
