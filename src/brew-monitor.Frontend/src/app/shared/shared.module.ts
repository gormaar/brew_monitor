import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrewService } from "../shared/services/brew/brew.service";
import { AirlockService } from "../shared/services/airlock/airlock.service";
import { TemperatureService } from "../shared/services/temperature/temperature.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [BrewService, AirlockService, TemperatureService],
})
export class SharedModule {}
