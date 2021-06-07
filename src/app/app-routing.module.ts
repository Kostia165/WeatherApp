import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { FindWeatherComponent } from './find-weather/find-weather.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'main_menu', component: MainMenuComponent },
  { path: 'find_weather', component: FindWeatherComponent },
  { path: 'history_page', component: HistoryPageComponent },
  { path: 'about_author', component: AboutAuthorComponent },
  { path: '',   redirectTo: '/main_menu', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
