import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';

import { GetAllCitiesService } from '../services/get-all-cities.service';
import { ApiWeatherRequestsService } from '../services/api-weather-requests.service';
import { LocalStorageService } from '../services/local-storage.service';
import { WeatherObject } from '../models/weather_object.model';

import { MatsnackbarComponent } from '../matsnackbar/matsnackbar.component';

@Component({
  selector: 'app-find-weather',
  templateUrl: './find-weather.component.html',
  styleUrls: ['./find-weather.component.css']
})
export class FindWeatherComponent implements OnInit {
  findWeatherForm = this.fb.group({
    countries: [, [Validators.required]],
    cities: [, [Validators.required]]
  });
  weatherData: WeatherObject = null;

  countriesList: String[] = [];
  citiesList: String[] = [];

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private _location: Location,
    private cities_service: GetAllCitiesService,
    private weather_service: ApiWeatherRequestsService,
    private storage_service: LocalStorageService,
    private snackBar: MatsnackbarComponent
  ) { 
    this.countriesList = this.cities_service.getAllCountries();
  }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

  getCities(event: MatOptionSelectionChange, country: String) {
    if (event.source.selected) {
      this.citiesList = this.cities_service.getCitiesByCountry(country);
    }
  }

  findWeather() {
    this.isLoading = true;
    this.weather_service.getWeatherByCity(this.findWeatherForm.get('cities').value).subscribe( 
      res => {
        this.weatherData = res;
        this.weatherData.time_to_save = new Date();
        this.storage_service.addNewItem(this.weatherData);
        this.snackBar.openSnackBar('Success search', 'green-snackbar');
        this.isLoading = false;
      },
      err => {
        this.snackBar.openSnackBar('Try later', 'red-snackbar');
        this.isLoading = false;
      }
    );
  }


}
