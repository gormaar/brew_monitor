import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IBrewModel {
  id: number;
  name: string;
  type: string;
  timestamp: Date;
  selected: boolean;
}

@Injectable({
  providedIn: "root",
})
export class BrewService {
  constructor(private http: HttpClient) {}

  getBrew(id: number): Observable<IBrewModel> {
    return this.http.get<IBrewModel>("");
  }

  getBrews(): IBrewModel[] {
    let brews: IBrewModel[] = [
      {
        id: 0,
        name: "IPA",
        type: "IPA",
        timestamp: new Date("20.04.2020"),
        selected: false,
      },
      {
        id: 1,
        name: "Dubbel",
        type: "Belgisk Dubbel",
        timestamp: new Date("21.04.2020"),
        selected: false,
      },
      {
        id: 2,
        name: "Trippel",
        type: "Belgisk Trippel",
        timestamp: new Date("12.05.2020"),
        selected: false,
      },
      {
        id: 3,
        name: "Dead Pony Club",
        type: "Pale Ale",
        timestamp: new Date("15.05.2020"),
        selected: false,
      },
    ];
    return brews.reverse();
  }
}
