import { Component, OnInit, Input } from "@angular/core";
import { IBrewModel } from "src/app/shared/services/brew/brew.service";

@Component({
  selector: "brew-page-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
})
export class StatisticsComponent implements OnInit {
  @Input() activeBrew: IBrewModel;

  constructor() {}

  ngOnInit() {}
}
