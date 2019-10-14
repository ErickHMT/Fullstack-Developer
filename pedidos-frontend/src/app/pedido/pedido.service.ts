import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pedido } from './pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private url = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Pedido[]> {
    return this.http
      .get<Pedido[]>(`${this.url}/admin/pedidos`);
  }

  salvar(pedido: Pedido): Observable<Pedido> {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };

    return this.http
      .post<Pedido>(`${this.url}/admin/pedidos`, JSON.stringify(pedido), httpOptions);
  }

}
