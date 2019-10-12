import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = 'https://api.myjson.com/bins/tnjfr';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Produto[]> {
    return this.http
        .get<Produto[]>(this.url);
  }
}
