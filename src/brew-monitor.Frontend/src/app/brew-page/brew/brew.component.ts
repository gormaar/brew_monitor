import { Component, OnInit, Input } from "@angular/core";
import { IBrewModel } from "src/app/shared/services/brew/brew.service";

@Component({
  selector: "brew-page-brew",
  templateUrl: "./brew.component.html",
  styleUrls: ["./brew.component.scss"],
})
export class BrewComponent implements OnInit {
  @Input() brew: IBrewModel;

  constructor() {}

  ngOnInit(): void {}
}
