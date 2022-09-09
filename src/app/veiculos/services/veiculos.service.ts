
import { Injectable } from '@angular/core';
import { Veiculo } from '../model/veiculo';
import { HttpClient } from '@angular/common/http'
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private readonly API = 'veiculos';

  constructor(private httpClient: HttpClient) { }


  listVeiculos() {
    return this.httpClient.get<Veiculo[]>(this.API)
    .pipe(
      first(),
      tap(veiculos => console.log(veiculos))
    );
  }

  save(record: Veiculo) {
    return this.httpClient.post<Veiculo>(this.API, record).pipe(first());
  }
}
