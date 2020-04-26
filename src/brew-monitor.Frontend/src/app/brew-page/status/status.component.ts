import { Component, OnInit, Input } from "@angular/core";
import { IBrewModel } from "src/app/shared/services/brew/brew.service";

@Component({
  selector: "brew-page-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"],
})
export class StatusComponent implements OnInit {
  @Input() activeBrew: IBrewModel;

  constructor() {}

  ngOnInit(): void {}

  getBrewStatus() {}
}
