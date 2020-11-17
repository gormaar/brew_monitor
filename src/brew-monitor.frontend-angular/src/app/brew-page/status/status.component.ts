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
    this.status = this.calculateFermentationProgress();
  }

  calculateFermentationProgress(): number {
    let brewDetails = this._detailsService.getBrewDetails(this.activeBrew.id);
    let diff = Math.floor(
      (+Date.now() - +brewDetails.brewDate) / (1000 * 60 * 60 * 24)
    );
    return (diff * 100) / brewDetails.fermentationDays;
  }
}
