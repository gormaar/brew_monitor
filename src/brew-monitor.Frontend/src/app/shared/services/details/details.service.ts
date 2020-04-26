import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IBrewModel, BrewService } from "../../services/brew/brew.service";
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

  getBrewDetails(brew: number): Observable<IDetailsModel> {
    let brewDetails = this._http.get<IDetailsModel>("");
    return brewDetails;
  }
}
