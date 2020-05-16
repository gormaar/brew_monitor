import { Injectable } from "@angular/core";
import { BrewService, IBrewModel } from "../brew/brew.service";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, Subscription } from "rxjs";

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
  airlockStream: Observable<IAirLockModel>;
  airlockData: BehaviorSubject<IAirLockModel>;

  constructor(private _http: HttpClient, private _brewService: BrewService) {
    this.subcription = this._brewService.activeBrewStream.subscribe(
      (active) => (this.activeBrew = active)
    );
    this.airlockData = new BehaviorSubject<IAirLockModel>(null);
    this.airlockStream = this.airlockData.asObservable();
  }

  getRespiration(brewId: number): IAirLockModel[] {
    let data = [
      {
        id: 1,
        value: 120,
        hourValue: 1200,
        timestamp: new Date("16.05.2020"),
        brewId: 3,
      },
      {
        id: 2,
        value: 155,
        hourValue: 1178,
        timestamp: new Date("16.05.2020:"),
        brewId: 3,
      },
      {
        id: 3,
        value: 142,
        hourValue: 1198,
        timestamp: new Date("16.05.2020"),
        brewId: 3,
      },
      {
        id: 4,
        value: 166,
        hourValue: 1248,
        timestamp: new Date("16.05.2020"),
        brewId: 3,
      },
    ];

    return data;
  }
}
