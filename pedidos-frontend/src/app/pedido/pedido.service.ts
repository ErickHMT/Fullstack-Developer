import { URL } from './../api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Pedido[]> {
    return this.http
      .get<Pedido[]>(`${URL}/pedidos`);
  }

  salvar(pedido: Pedido): Observable<Pedido> {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };

    return this.http
      .post<Pedido>(`${URL}/pedidos`, JSON.stringify(pedido), httpOptions);
  }

}
