import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { BrewService, IBrewModel } from "../brew/brew.service";
import { HttpClient } from "@angular/common/http";

export interface IAirLockModel {
  id: number;
  value: number;
  hourValue: number;
  timestamp: Date;
  brewId: number;
}

@Injectable({
  providedIn: "root",
})
export class AirlockService {
  activeBrew: IBrewModel;
  subcription: Subscription;

  constructor(private _http: HttpClient, private _brewService: BrewService) {
    this.subcription = this._brewService.activeBrewStream.subscribe(
      (active) => (this.activeBrew = active)
    );
  }

  getRespiration(): IAirLockModel {
    let airlock: IAirLockModel = {
      id: 1,
      value: 120,
      hourValue: 1200,
      timestamp: new Date(Date.now()),
      brewId: 3,
    };
    return airlock;
  }
}
