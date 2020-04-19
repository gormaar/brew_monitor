import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { BrewFormComponent } from './brew-form/brew-form.component';

@NgModule({
  declarations: [ListComponent, ListItemComponent, BrewFormComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule],
  exports: [ListComponent],
})
export class BrewListModule {}
