import { Component, OnInit } from "@angular/core";
import { IBrewModel } from "../../shared/services/brew/brew.service";
import { CommonService } from "src/app/shared/services/common/common.service";

@Component({
  selector: "brew-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  brews: IBrewModel[];
  constructor(private commonService: CommonService) {
    this.brews = this.commonService.getBrews();
  }

  ngOnInit(): void {}

  selectBrew(brew: IBrewModel) {
    this.commonService.selectBrew(brew);
  }
}
