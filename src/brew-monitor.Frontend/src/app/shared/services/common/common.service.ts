import { Injectable } from "@angular/core";
import { IBrewModel, BrewService } from "../brew/brew.service";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  selectedBrew: IBrewModel;
  brews: IBrewModel[];
  constructor(private brewService: BrewService) {
    this.brews = this.brewService.getBrews();
    this.selectedBrew = this.brews[0];
  }

  getBrews(): IBrewModel[] {
    return this.brews;
  }

  selectBrew(brew: IBrewModel): void {
    this.selectedBrew = brew;
  }
}
