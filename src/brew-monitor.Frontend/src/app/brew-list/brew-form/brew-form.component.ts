import { Component, OnInit } from "@angular/core";
import { BrewService } from "src/app/shared/services/brew/brew.service";

interface IInputTags {
  details: String[];
  fermentation: String[];
  ingredients: String[];
}

@Component({
  selector: "brew-form",
  templateUrl: "./brew-form.component.html",
  styleUrls: ["./brew-form.component.scss"],
})
export class BrewFormComponent implements OnInit {
  inputTags: IInputTags;

  constructor(private _brewService: BrewService) {}

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
      ingredients: ["Barley", "Hops", "Yeast", "Extra", "Water"],
    };
  }

  closeForm() {
    this._brewService.toggleForm();
  }
}
