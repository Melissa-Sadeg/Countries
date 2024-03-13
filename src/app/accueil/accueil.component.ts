import { Component } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  // tableau enregistre tous les pays
  countries = [];
  constructor(private countryService: CountryService) {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
      console.log(this.countries);
    });
  }
}
