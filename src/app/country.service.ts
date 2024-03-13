import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // outille qui fait des requette
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  //specifier un lien api
  API_URL: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}
  getCountries(): Observable<any> {
    return this.http.get(this.API_URL + '/all');
  }
}
// spec fichier txt
