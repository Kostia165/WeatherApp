import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FindWeatherComponent } from './find-weather/find-weather.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatsnackbarComponent } from './matsnackbar/matsnackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    FindWeatherComponent,
    HistoryPageComponent,
    AboutAuthorComponent,
    PageNotFoundComponent,
    MatsnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [
    MatsnackbarComponent,
    { 
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, 
      useValue: {
        duration: 2500, 
        verticalPosition: 'bottom',
        horizontalPosition: 'end'
      } 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
