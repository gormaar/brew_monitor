import { Component, OnInit } from "@angular/core";

interface IInputTags {
  details: String[];
  fermentation: String[];
  ingredients: String[];
}

const a = {};

@Component({
  selector: "brew-form",
  templateUrl: "./brew-form.component.html",
  styleUrls: ["./brew-form.component.scss"],
})
export class BrewFormComponent implements OnInit {
  inputTags: IInputTags;

  constructor() {}

  ngOnInit(): void {
    this.inputTags = {
      details: [
        "Brew name",
        "Brew type",
        "Brew date",
        "Mashing temperature",
        "Mashing duration",
        "Original Gravity",
        "Specific Gravity",
        "Final Gravity",
        "Fermentation temperature",
        "Fermentation temperature threshold",
        "Total amount",
      ],
      fermentation: [
        "Fermentation start-date",
        "Fermentation end-date",
        "Bottled days",
      ],
      ingredients: ["Barley", "Hops", "Extra", "Water"],
    };
  }
}
