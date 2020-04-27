import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IDetailsModel {
  brewDate: Date;
  fermentationDays: number;
}

@Injectable({
  providedIn: "root",
})
export class DetailsService {
  // brewDetails:

  constructor(private _http: HttpClient) {}

  getBrewDetails(brew: number): IDetailsModel {
    //return this._http.get<IDetailsModel>("");
    let details: IDetailsModel = {
      brewDate: new Date("2020,3,25"),
      fermentationDays: 14,
    };
    return details;
  }
}
