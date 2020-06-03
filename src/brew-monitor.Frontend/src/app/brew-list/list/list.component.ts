import { Component, OnInit } from "@angular/core";
import { IBrewModel } from "src/app/shared/services/brew/brew.service";
import { BrewService } from "../../shared/services/brew/brew.service";

@Component({
  selector: "brew-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  brews: IBrewModel[];
  displayForm: boolean;

  constructor(private _brewService: BrewService) {}

  ngOnInit(): void {
    this.brews = this._brewService.getBrews();
    this.displayForm = false;
  }

  selectBrew(brew: IBrewModel): void {
    this._brewService.setBrew(brew);
  }

  toggleForm() {
    this._brewService.toggleForm();
  }
}
