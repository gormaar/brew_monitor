import { Component, OnInit } from "@angular/core";

@Component({
  selector: "brew-form",
  templateUrl: "./brew-form.component.html",
  styleUrls: ["./brew-form.component.scss"],
})
export class BrewFormComponent implements OnInit {
  brewInputs: String[];

  constructor() {}

  ngOnInit(): void {
    this.brewInputs = [
      "Brew name",
      "Brew type",
      "Brew date",
      "Fermentation start-date",
      "Fermentation end-date",
      "Original Gravity",
      "Specific Gravity",
      "Final Gravity",
      "Optimal fermentation temperature",
      "Fermentation temperature threshold",
      "Bottled days",
      "Water",
      "Barley",
      "Hops",
      "Extra",
    ];
  }
}
