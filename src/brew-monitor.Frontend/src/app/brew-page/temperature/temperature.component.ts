import { Component, OnInit, Input } from "@angular/core";
import { Chart } from "chart.js";
import { IBrewModel } from "src/app/shared/services/brew/brew.service";
import { TemperatureService } from "src/app/shared/services/temperature/temperature.service";

@Component({
  selector: "brew-page-temperature",
  templateUrl: "./temperature.component.html",
  styleUrls: ["./temperature.component.scss"],
})
export class TemperatureComponent implements OnInit {
  @Input() activeBrew: IBrewModel;
  shortTerm: Chart;
  longTerm: Chart;
  longTermList: number[];
  shortTermList: number[];

  constructor(private _tempService: TemperatureService) {}

  ngOnInit(): void {
    this.shortTermList = this._tempService
      .getTemperature(this.activeBrew.id)
      .map((item) => item.value);
    this.longTermList = this._tempService
      .getTemperature(this.activeBrew.id)
      .map((item) => item.value);

    this.shortTerm = new Chart("temp-short", {
      type: "bar",
      options: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Temperature",
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

    this.longTerm = new Chart("temp-long", {
      type: "line",
      options: {
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Temperature",
              },
            },
          ],
          xAxes: [
            {
              type: "time",
              time: {
                unit: "hour",
              },
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
