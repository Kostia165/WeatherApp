import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatsnackbarComponent } from '../matsnackbar/matsnackbar.component';

import { LocalStorageService } from '../services/local-storage.service';
import { WeatherObject } from '../models/weather_object.model';


@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listOfSearches: WeatherObject[] = [];

  constructor(
    private storage_service: LocalStorageService,
    private _location: Location,
    private snackBar: MatsnackbarComponent
  ) { }

  ngOnInit(): void {
    this.listOfSearches = this.storage_service.getLastTenItems();
  }

  backClicked() {
    this._location.back();
  }

  clearHistory() {
    this.storage_service.clearStorage();
    this.listOfSearches = [];
    this.snackBar.openSnackBar('History cleared', 'green-snackbar');
  }

}
