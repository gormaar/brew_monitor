import { Injectable } from "@angular/core";
import { Timestamp } from "rxjs";

export interface ITemperatureModel {
  id: number;
  value: number;
  timestamp: Timestamp<number>;
  brewId: number;
}

@Injectable({
  providedIn: "root",
})
export class TemperatureService {
  constructor() {}
}
