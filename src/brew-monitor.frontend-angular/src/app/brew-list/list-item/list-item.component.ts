import { Component, OnInit, Input } from "@angular/core";
import {
  IBrewModel,
  BrewService,
} from "src/app/shared/services/brew/brew.service";
import { Subscription } from "rxjs";

@Component({
  selector: "brew-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
})
export class ListItemComponent implements OnInit {
  @Input() brew: IBrewModel;
  subscription: Subscription;
  activeBrew: IBrewModel;

  constructor(private _brewService: BrewService) {}

  ngOnInit(): void {
    this.subscription = this._brewService.activeBrewStream.subscribe(
      (active) => (this.activeBrew = active)
    );
  }
}
