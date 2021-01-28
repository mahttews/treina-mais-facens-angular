import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  buscarCEP(cep: string) {
    return this.httpClient.get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
  }
}
