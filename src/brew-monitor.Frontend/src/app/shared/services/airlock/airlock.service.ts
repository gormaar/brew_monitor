import { Injectable } from "@angular/core";
import { Timestamp } from "rxjs";

export interface IAirLockModel {
  id: number;
  value: number;
  hourValue: number;
  timestamp: Timestamp<number>;
  brewId: number;
}

@Injectable({
  providedIn: "root",
})
export class AirlockService {
  constructor() {}
}
