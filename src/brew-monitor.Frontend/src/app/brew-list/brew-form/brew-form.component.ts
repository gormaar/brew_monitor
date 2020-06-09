import { Component, OnInit } from "@angular/core";
import { BrewService } from "src/app/shared/services/brew/brew.service";
import { FormBuilder, FormGroup } from "@angular/forms";

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
  brewForm: FormGroup;

  constructor(
    private _brewService: BrewService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.brewForm = this._formBuilder.group({
      brewName: "",
      brewType: "",
      brewDate: "",
      mashingTemp: "",
    });
    this.inputTags = {
      details: [
        "Brew name",
        "Brew type",
        "Brew date",
        "Mashing temperature",
        "Mashing duration",

        "Total amount",
      ],
      fermentation: [
        "Fermentation start-date",
        "Fermentation end-date",
        "Bottled days",
        "Original Gravity",
        "Specific Gravity",
        "Final Gravity",
        "Fermentation temperature",
        "Fermentation temperature threshold",
      ],
      ingredients: ["Barley", "Hops", "Yeast", "Extra", "Water"],
    };
  }

  closeForm() {
    this._brewService.toggleForm();
  }
}
