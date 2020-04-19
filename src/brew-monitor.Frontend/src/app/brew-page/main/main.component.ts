import { Component, OnInit } from "@angular/core";

@Component({
  selector: "brew-page-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  pageToggle: boolean;

  constructor() {
    this.pageToggle = true;
  }

  ngOnInit(): void {}

  renderStatistics() {
    this.pageToggle = true;
  }

  renderBrews() {
    this.pageToggle = false;
  }
}
