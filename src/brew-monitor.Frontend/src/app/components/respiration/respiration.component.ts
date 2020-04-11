import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-respiration",
  templateUrl: "./respiration.component.html",
  styleUrls: ["./respiration.component.scss"],
})
export class RespirationComponent implements OnInit {
  chart: Chart;
  chart2: Chart;
  nights: string[];
  yatraList: number[];
  expediaList: number[];

  constructor() {}

  ngOnInit(): void {
    const data = [
      { nights: 1, yatra: 2728, expedia: 4282 },
      { nights: 2, yatra: 6886, expedia: 10243 },
      { nights: 3, yatra: 10808, expedia: 16850 },
      { nights: 4, yatra: 13361, expedia: 27111 },
      { nights: 5, yatra: 18751, expedia: 27111 },
      { nights: 6, yatra: 20440, expedia: 30658 },
    ];
    this.nights = data.map((item) => item.nights.toString());
    this.yatraList = data.map((item) => item.yatra);
    this.expediaList = data.map((item) => item.expedia);

    this.chart = new Chart("resp-short", {
      type: "line",
      data: {
        labels: this.nights,
        datasets: [
          {
            data: this.yatraList,
          },
          {
            data: this.expediaList,
          },
        ],
      },
    });

    this.chart2 = new Chart("resp-long", {
      type: "line",
      data: {
        labels: this.nights,
        datasets: [
          {
            data: this.yatraList,
          },
          {
            data: this.expediaList,
          },
        ],
      },
    });
  }
}
