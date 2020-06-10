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
      mashingDuration: "",
      totalAmount: "",
    });

    this.inputTags = {
      details: [
        "Brew name",
        "Mashing temperature",
        "Brew date",
        "Mashing duration",
        "Brew type",
        "Total amount",
      ],
      fermentation: [
        "Fermentation start-date",
        "Original Gravity",
        "Fermentation end-date",
        "Specific Gravity",
        "Fermentation temperature",
        "Final Gravity",
        "Fermentation temperature threshold",
        "Bottled days",
      ],
      ingredients: ["Barley", "Hops", "Yeast", "Extra", "Water"],
    };
  }

  closeForm() {
    this._brewService.toggleForm();
  }
}
