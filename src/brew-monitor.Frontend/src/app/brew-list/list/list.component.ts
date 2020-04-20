import { Component, OnInit } from "@angular/core";
import {
  BrewService,
  IBrewModel,
} from "../../shared/services/brew/brew.service";

@Component({
  selector: "brew-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  brews: IBrewModel[];
  constructor(private brewService: BrewService) {
    this.brews = this.brewService.getBrews();
  }

  ngOnInit(): void {}
}
