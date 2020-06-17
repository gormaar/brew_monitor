import { Component, OnInit } from "@angular/core";
import { BrewService } from "src/app/shared/services/brew/brew.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "brew-form",
  templateUrl: "./brew-form.component.html",
  styleUrls: ["./brew-form.component.scss"],
})
export class BrewFormComponent implements OnInit {
  inputTags: String[];
  detailsForm: FormGroup;
  fermentForm: FormGroup;
  ingredientsForm: FormGroup;

  constructor(
    private _brewService: BrewService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.detailsForm = this._formBuilder.group({
      Brewname: "",
      brewType: "",
      brewDate: "",
      mashingTemp: "",
      mashingDuration: "",
      totalAmount: "",
      amount: "",
    });

    this.fermentForm = this._formBuilder.group({
      startDate: "",
      endDate: "",
      temperature: "",
      tempThreshold: "",
      OG: "",
      SG: "",
      FG: "",
      daysBottle: "",
    });

    this.ingredientsForm = this._formBuilder.group({
      barley: "",
      yeast: "",
      hops: "",
      water: "",
      extra: "",
    });

    this.inputTags = [
      "Brew name",
      "Mashing temperature",
      "Brew date",
      "Mashing duration",
      "Brew type",
      "Total amount",

      "Fermentation start-date",
      "Original Gravity",
      "Fermentation end-date",
      "Specific Gravity",
      "Fermentation temperature",
      "Final Gravity",
      "Fermentation temperature threshold",
      "Bottled days",

      "Barley",
      "Hops",
      "Yeast",
      "Extra",
      "Water",
    ];
  }

  closeForm() {
    this._brewService.toggleForm();
  }
}
