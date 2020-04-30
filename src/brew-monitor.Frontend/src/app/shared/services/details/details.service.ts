import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { BrewService, IBrewModel } from "../brew/brew.service";

export interface IDetailsModel {
  brewDate: Date;
  fermentationDays: number;
}

@Injectable({
  providedIn: "root",
})
export class DetailsService {
  subscription: Subscription;
  activeBrew: IBrewModel;

  constructor(private _http: HttpClient, private _brewService: BrewService) {
    this.subscription = this._brewService.activeBrewStream.subscribe(
      (active) => (this.activeBrew = active)
    );
  }

  getBrewDetails(brew: number): IDetailsModel {
    //return this._http.get<IDetailsModel>("");
    let details: IDetailsModel = {
      brewDate: new Date("2020,4,28"),
      fermentationDays: 14,
    };
    return details;
  }
}
