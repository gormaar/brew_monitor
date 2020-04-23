import { Component, OnInit } from "@angular/core";
import { IBrewModel } from "src/app/shared/services/brew/brew.service";

@Component({
  selector: "brew-page-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  pageToggle: boolean;
  selectedBrew: IBrewModel;

  constructor() {
    this.pageToggle = true;
  }

  ngOnInit(): void {}

  renderStatistics() {
    this.pageToggle = true;
  }

  setSelectedBrew(brew: IBrewModel): void {
    this.selectedBrew = brew;
  }

  renderBrews() {
    this.pageToggle = false;
  }
}
