import {
  Component,
  OnInit,
  Input,
  SystemJsNgModuleLoader,
} from "@angular/core";
import { Chart } from "chart.js";
import { IBrewModel } from "src/app/shared/services/brew/brew.service";
import { AirlockService } from "src/app/shared/services/airlock/airlock.service";
import { timer } from "rxjs";

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

  constructor(private _airlockService: AirlockService) {}

  ngOnInit(): void {
    this.getSimulatedAirlockFrequency();
    let data = this._airlockService.getRespiration(this.activeBrew.id);
    this.shortTermData = data.map((item) => item.value);
    this.longTermData = data.map((item) => item.hourValue);
    this.longTermTime = data.map((item) => item.timestamp);
    this.shortTermTime = data.map((item) => item.timestamp);

    this.shortTerm = new Chart("airlock-short", {
      type: "line",
      options: {
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
      },
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

    this.longTerm = new Chart("airlock-long", {
      type: "line",
      options: {
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
      },
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

  getSimulatedAirlockFrequency() {
    let airlockData = this._airlockService.getRecentAirlockActivity();
    let frequencyTimeout = 60 / airlockData.value;
    for (let i = 0; i <= airlockData.value; i++) {
      console.log("i:", i);
      setTimeout(() => {
        this.airlockActive = true;
      }, frequencyTimeout * 1000);
      this.airlockActive = false;
    }
    // this.getSimulatedAirlockFrequency();
  }
}
