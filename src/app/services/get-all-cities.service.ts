import { Injectable } from '@angular/core';
import { CitiesWithCountries } from '../models/cities_countries.model';
import * as citiesData from '../../assets/files/world-cities_json.json';

@Injectable({
  providedIn: 'root'
})
export class GetAllCitiesService {
  allData: CitiesWithCountries[] = [];
  allCountries: String[] = [];

  constructor() { 
    this.allData = citiesData.default;
    for (var d of this.allData) {
      this.allCountries.push(d.country);
    }
    this.allCountries = this.allCountries.filter((v, i, a) => a.indexOf(v) === i);
    this.allCountries = this.allCountries.sort();
  }

  getAllCountries(): String[] {
    return this.allCountries;
  }

  getCitiesByCountry(country: String): String[] {
    var citiesByCountry: String[] = [];
    for (var d of this.allData) {
      if (d.country == country) {
        citiesByCountry.push(d.name);
      }
    }
    console.log(citiesByCountry);
    citiesByCountry = citiesByCountry.sort();
    return citiesByCountry;
  }

}
