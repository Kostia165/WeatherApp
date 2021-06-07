import { Injectable } from '@angular/core';

import { WeatherObject } from '../models/weather_object.model';

function getLocalStorage(): Storage {
  return localStorage;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _localStorage: Storage;
  private data_label: string;

  constructor() {
     this._localStorage = getLocalStorage();
     this.data_label = "weather_data";
  }

  addNewItem(new_object: WeatherObject) {
    var weather_array: WeatherObject[] = JSON.parse(this._localStorage.getItem(this.data_label));
    if (weather_array === null) weather_array = [];
    weather_array.push(new_object);
    this._localStorage.setItem(this.data_label, JSON.stringify(weather_array));
  }

  getLastTenItems(): WeatherObject[] {
    var weather_array: WeatherObject[] = JSON.parse(this._localStorage.getItem(this.data_label));
    if (weather_array === null) weather_array = [];
    var result_array = [];
    if (weather_array.length <= 10) {
      result_array = weather_array;
    } else {
      result_array = weather_array.slice(Math.max(weather_array.length - 10, 1));
    }
    
    return result_array;
  }

  getItemById(id: number): WeatherObject{
    var weather_array: WeatherObject[] = JSON.parse(this._localStorage.getItem(this.data_label));
    if (weather_array === null) return null;
    return weather_array[id];
  }

  clearStorage() {
    this._localStorage.removeItem(this.data_label);
  }
  
}
