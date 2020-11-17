import { Component, OnInit } from "@angular/core";
import {
  IBrewModel,
  BrewService,
} from "src/app/shared/services/brew/brew.service";
import { Subscription } from "rxjs";

@Component({
  selector: "brew-page-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  pageToggle: boolean;
  activeBrew: IBrewModel;
  subscription: Subscription;

  constructor(private _brewService: BrewService) {}

  ngOnInit(): void {
    this.pageToggle = true;
    this.subscription = this._brewService.activeBrewStream.subscribe(
      (active) => (this.activeBrew = active)
    );
  }

  renderStatistics() {
    this.pageToggle = true;
  }

  setSelectedBrew(brew: IBrewModel): void {
    this.activeBrew = brew;
  }

  renderBrews() {
    this.pageToggle = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
