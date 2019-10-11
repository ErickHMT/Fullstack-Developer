import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'https://api.myjson.com/bins/tnjfr';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cliente[]> {
    return this.http
        .get<Cliente[]>(this.url);
  }
}
