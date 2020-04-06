import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrewListComponent } from './components/brew-list/brew-list.component';
import { MainComponent } from './components/main/main.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { BrewComponent } from './components/brew/brew.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrewListComponent,
    MainComponent,
    StatisticsComponent,
    BrewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
