import { Component, OnInit, Input } from "@angular/core";
import { Chart, ChartOptions } from "chart.js";
import * as ChartAnnotation from "chartjs-plugin-annotation";
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
  longTermData: number[];
  shortTermData: number[];
  longTermTime: Date[];
  shortTermTime: Date[];
  airlockActive: boolean;
  threshold: number;

  constructor(private _airlockService: AirlockService) {}

  ngOnInit(): void {
    this.getSimulatedAirlockFrequency();
    let data = this._airlockService.getRespiration(this.activeBrew.id);
    this.shortTermData = data.map((item) => item.value);
    this.longTermData = data.map((item) => item.hourValue);
    this.longTermTime = data.map((item) => item.timestamp);
    this.shortTermTime = data.map((item) => item.timestamp);
    this.getShortTermChart();
    this.getLongTermChart();
  }

  getShortTermChart() {
    this.shortTerm = new Chart("airlock-short", {
      type: "line",
      plugins: [ChartAnnotation],
      options: {
        annotation: {
          annotations: [
            {
              label: "Threshold",
              type: "box",
              mode: "horizontal",
              xScaleID: "x-axis-0",
              yScaleID: "y-axis-0",
              value: 350,
              borderWidth: 1,
              backgroundColor: "rgba(200,60,60,0.25)",
              borderColor: "rgba(200,60,60,0.25)",
            },
          ],
        },
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 1500,
              },
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
      } as ChartOptions,
      data: {
        labels: this.shortTermTime,
        datasets: [
          {
            label: "Short term",
            data: this.shortTermData,
            backgroundColor: "rgb(240, 190, 114)",
          },
        ],
      },
    });
  }

  getLongTermChart() {
    this.longTerm = new Chart("airlock-long", {
      type: "line",
      plugins: [ChartAnnotation],
      options: {
        annotation: {
          annotations: [
            {
              label: "Threshold",
              type: "box",
              mode: "horizontal",
              xScaleID: "x-axis-0",
              yScaleID: "y-axis-0",
              value: 350,
              borderWidth: 1,
              backgroundColor: "rgba(200,60,60,0.25)",
              borderColor: "rgba(200,60,60,0.25)",
            },
          ],
        },
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 1500,
              },
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
      } as ChartOptions,
      data: {
        labels: this.longTermTime,
        datasets: [
          {
            label: "Long term",
            data: this.longTermData,
            backgroundColor: "rgb(240, 190, 114)",
          },
        ],
      },
    });
  }

  sleep(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  async getSimulatedAirlockFrequency() {
    let airlockData = this._airlockService.getRecentAirlockActivity();
    let frequencyTimeout = 60 / airlockData.value;
    for (let i = 0; i <= airlockData.value; i++) {
      this.airlockActive = true;
      await this.sleep(1000);
      this.airlockActive = false;
      await this.sleep(frequencyTimeout * 1000);
    }
    this.getSimulatedAirlockFrequency();
  }
}
