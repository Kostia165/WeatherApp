import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable, throwError } from 'rxjs';

import { WeatherObject } from '../models/weather_object.model';

@Injectable({
  providedIn: 'root'
})
export class ApiWeatherRequestsService {
  protocol: String = "https://";
  url: String = "api.openweathermap.org/data/2.5/weather";

  constructor(
    private http: HttpClient
  ) { }

  getWeatherByCity(city: String): Observable<WeatherObject> {
    var full_url = '';
    full_url += this.protocol;
    full_url += this.url + "?q=" + city + "&appid=" + environment.apiWeatherKey + '&units=metric';
    console.log(full_url);
    return this.http.get(full_url);
  }
}
