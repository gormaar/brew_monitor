import { Component, OnInit } from "@angular/core";
import { BrewService } from "src/app/shared/services/brew/brew.service";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "brew-form",
  templateUrl: "./brew-form.component.html",
  styleUrls: ["./brew-form.component.scss"],
})
export class BrewFormComponent implements OnInit {
  inputTags: String[];
  ingredientTags: String[];
  ingredientsForm: FormGroup;
  brewForm: FormGroup;

  constructor(
    private _brewService: BrewService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.brewForm = this._formBuilder.group({
      Brewname: "",
      brewType: "",
      brewDate: "",
      mashingTemp: "",
      mashingDuration: "",
      totalAmount: "",
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
      barley: this._formBuilder.array([]),
      yeast: this._formBuilder.array([]),
      hops: this._formBuilder.array([]),
      water: "",
      extra: this._formBuilder.array([]),
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
    ];

    this.ingredientTags = ["Barley", "Hops", "Yeast", "Extra", "Water"];
  }

  get barleyForms() {
    return this.ingredientsForm.get("barley") as FormArray;
  }

  get hopsForms() {
    return this.ingredientsForm.get("hops") as FormArray;
  }

  get yeastForms() {
    return this.ingredientsForm.get("yeast") as FormArray;
  }

  get extraForms() {
    return this.ingredientsForm.get("extra") as FormArray;
  }

  addBarley() {
    const barley = this._formBuilder.group({
      type: "",
      amount: "",
    });

    this.barleyForms.push(barley);
  }

  addIngredient(ingredientName: string) {
    const ingredient = this._formBuilder.group({
      type: "",
      amount: "",
    });

    switch (ingredientName) {
      case "barley":
        this.barleyForms.push(ingredient);
      case "hops":
        this.hopsForms.push(ingredient);
      case "yeast":
        this.yeastForms.push(ingredient);
      case "extra":
        this.extraForms.push(ingredient);
    }
  }

  removeBarley(i: number) {
    this.barleyForms.removeAt(i);
  }

  closeForm() {
    this._brewService.toggleForm();
  }
}
