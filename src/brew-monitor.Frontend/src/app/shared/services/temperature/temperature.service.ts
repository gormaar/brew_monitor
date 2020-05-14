import { Injectable } from "@angular/core";
import { Timestamp, Subscription, Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BrewService, IBrewModel } from "../brew/brew.service";

export interface ITemperatureModel {
  id: number;
  value: number;
  timestamp: Date;
  brewId: number;
}

@Injectable({
  providedIn: "root",
})
export class TemperatureService {
  activeBrew: IBrewModel;
  subscription: Subscription;
  tempStream: Observable<ITemperatureModel>;
  tempData: BehaviorSubject<ITemperatureModel>;

  constructor(private _http: HttpClient, private _brewService: BrewService) {
    this.subscription = this._brewService.activeBrewStream.subscribe(
      (active) => (this.activeBrew = active)
    );
    this.tempData = new BehaviorSubject<ITemperatureModel>(null);
    this.tempStream = this.tempData.asObservable();
  }

  getTemperature(brewId: number): ITemperatureModel[] {
    let data = [
      {
        id: 1,
        value: 22,
        timestamp: new Date(Date.now()),
        brewId: 3,
      },
      {
        id: 2,
        value: 23,
        timestamp: new Date(Date.now()),
        brewId: 3,
      },
      {
        id: 3,
        value: 22,
        timestamp: new Date(Date.now()),
        brewId: 3,
      },
    ];
    return data;
  }
}
