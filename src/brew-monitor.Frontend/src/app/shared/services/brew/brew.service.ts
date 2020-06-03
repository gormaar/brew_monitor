import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, observable } from "rxjs";

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
  activeBrew: BehaviorSubject<IBrewModel>;
  brews: IBrewModel[];
  activeBrewStream: Observable<IBrewModel>;
  displayForm: BehaviorSubject<boolean>;
  displayFormStream: Observable<boolean>;

  constructor(private _http: HttpClient) {
    this.brews = this.getBrews();
    this.activeBrew = new BehaviorSubject<IBrewModel>(this.brews[0]);
    this.activeBrewStream = this.activeBrew.asObservable();
    this.displayForm = new BehaviorSubject<boolean>(false);
    this.displayFormStream = this.displayForm.asObservable();
  }

  getBrew(id: number): Observable<IBrewModel> {
    return this._http.get<IBrewModel>("");
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

  setBrew(brew: IBrewModel) {
    this.activeBrew.next(brew);
  }

  toggleForm() {
    this.displayForm.next(!this.displayForm.value);
  }
}
