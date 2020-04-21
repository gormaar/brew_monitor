import { Component, OnInit, Input } from "@angular/core";
import { IBrewModel } from "src/app/shared/services/brew/brew.service";

@Component({
  selector: "brew-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
})
export class ListItemComponent implements OnInit {
  @Input() brew: IBrewModel;
  activeItem: boolean;

  constructor() {}

  ngOnInit(): void {}

  selectBrew(brew: IBrewModel): void {
    brew.selected = !brew.selected;
  }
}
