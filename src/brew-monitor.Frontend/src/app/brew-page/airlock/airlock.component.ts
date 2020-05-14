import { Component, OnInit, Input } from "@angular/core";
import { Chart } from "chart.js";
import { IBrewModel } from "src/app/shared/services/brew/brew.service";
import { AirlockService } from "src/app/shared/services/airlock/airlock.service";

@Component({
  selector: "brew-page-airlock",
  templateUrl: "./airlock.component.html",
  styleUrls: ["./airlock.component.scss"],
})
export class AirlockComponent implements OnInit {
  @Input() activeBrew: IBrewModel;
  shortTerm: Chart;
  longTerm: Chart;
  longTermList: number[];
  shortTermList: number[];

  constructor(private _airlockService: AirlockService) {}

  ngOnInit(): void {
    let data = this._airlockService.getRespiration(this.activeBrew.id);
    this.shortTermList = data.map((item) => item.value);
    this.longTermList = data.map((item) => item.hourValue);
    this.shortTerm = new Chart("airlock-short", {
      type: "line",
      options: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Frequency",
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Time",
              },
            },
          ],
        },
      },
      data: {
        labels: this.shortTermList,
        datasets: [
          {
            label: "Short term",
            data: this.shortTermList,
          },
        ],
      },
    });

    this.longTerm = new Chart("airlock-long", {
      type: "line",
      options: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Frequency",
              },
            },
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Time",
              },
            },
          ],
        },
      },
      data: {
        labels: this.longTermList,
        datasets: [
          {
            label: "Long term",
            data: this.longTermList,
          },
        ],
      },
    });
  }
}
