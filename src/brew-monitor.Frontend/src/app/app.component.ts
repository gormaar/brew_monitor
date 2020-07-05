import { Component, OnInit } from "@angular/core";
import { BrewService } from "./shared/services/brew/brew.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  displayForm: boolean;
  subscription: Subscription;

  constructor(private _brewService: BrewService) {}
  title = "brew-monitor";

  ngOnInit(): void {
    this.subscription = this._brewService.displayFormStream.subscribe(
      (display) => (this.displayForm = display)
    );
  }
}
