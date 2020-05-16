import { NgModule } from "@angular/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main/main.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { BrewComponent } from "./brew/brew.component";
import { AirlockComponent } from "./airlock/airlock.component";
import { TemperatureComponent } from "./temperature/temperature.component";
import { StatusComponent } from "./status/status.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    MainComponent,
    StatisticsComponent,
    BrewComponent,
    AirlockComponent,
    TemperatureComponent,
    StatusComponent,
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    NoopAnimationsModule,
    SharedModule,
  ],
  exports: [MainComponent],
})
export class BrewPageModule {}
