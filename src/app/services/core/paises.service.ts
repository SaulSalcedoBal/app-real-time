import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const END_POINT = 'https://restcountries.eu/rest/v2';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param region => Africa, Americas, Asia, Europe, Oceania
   */

  getCountriesByRegion(region: string) {
    return this.http.get(`${END_POINT}/region/${region}`);

  }

  /**
   * 
   * @param criterio 
   */
  getCountriesBycriterio(criterio: string) {
    return this.http.get(`${END_POINT}/name/${criterio}`);

  }
}
