import { Component, OnInit, Input } from "@angular/core";
import { IBrewModel } from "src/app/shared/services/brew/brew.service";
import { DetailsService } from "../../shared/services/details/details.service";

@Component({
  selector: "brew-page-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"],
})
export class StatusComponent implements OnInit {
  @Input() activeBrew: IBrewModel;
  status: number;

  constructor(private _detailsService: DetailsService) {}

  ngOnInit(): void {
    this.status = this.getBrewStatus();
  }

  getBrewStatus(): number {
    let brewDetails = this._detailsService.getBrewDetails(this.activeBrew.id);
    console.log(
      "brewDetails:",
      brewDetails.brewDate,
      brewDetails.fermentationDays
    );
    let dateDiff = Date.now().valueOf() - brewDetails.brewDate.valueOf();
    let amount = brewDetails.fermentationDays - dateDiff;
    console.log("DateDiff:", dateDiff, "amount:", amount);
    let sum = (amount / brewDetails.fermentationDays) * 100;
    console.log(sum);
    return sum;
  }
}
