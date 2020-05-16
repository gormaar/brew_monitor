import { Component, OnInit, Input } from "@angular/core";
import { Chart } from "chart.js";
import { IBrewModel } from "src/app/shared/services/brew/brew.service";
import { TemperatureService } from "src/app/shared/services/temperature/temperature.service";

export interface IChartDataModel {
  values: number[];
  time: Date[];
}

@Component({
  selector: "brew-page-temperature",
  templateUrl: "./temperature.component.html",
  styleUrls: ["./temperature.component.scss"],
})
export class TemperatureComponent implements OnInit {
  @Input() activeBrew: IBrewModel;
  shortTermChart: Chart;
  longTermChart: Chart;
  longTermData: IChartDataModel;
  shortTermData: IChartDataModel;

  constructor(private _tempService: TemperatureService) {}

  ngOnInit(): void {
    this.shortTermData.values = this._tempService
      .getTemperature(this.activeBrew.id)
      .map((item) => item.value);
    this.longTermData.values = this._tempService
      .getTemperature(this.activeBrew.id)
      .map((item) => item.value);
    this.longTermData.time = this._tempService
      .getTemperature(this.activeBrew.id)
      .map((item) => item.timestamp);
    this.shortTermData.time = this._tempService
      .getTemperature(this.activeBrew.id)
      .map((item) => item.timestamp);

    this.shortTermChart = new Chart("temp-short", {
      type: "line",
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 40,
              },
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
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "Short term",
            data: [22, 22, 22, 23, 22],
            backgroundColor: "rgb(240, 190, 114)",
          },
        ],
      },
    });

    this.longTermChart = new Chart("temp-long", {
      type: "line",
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 40,
              },
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
                unit: "day",
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
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: "Long term",
            data: [20, 22, 24, 21, 22],
            backgroundColor: "rgb(240, 190, 114)",
          },
        ],
      },
    });
  }
}
