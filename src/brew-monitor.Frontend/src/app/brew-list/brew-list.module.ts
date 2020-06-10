import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ListItemComponent } from "./list-item/list-item.component";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { BrewFormComponent } from "./brew-form/brew-form.component";
import { BrewService } from "../shared/services/brew/brew.service";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [ListComponent, ListItemComponent, BrewFormComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [ListComponent, BrewFormComponent],
  providers: [BrewService],
})
export class BrewListModule {}
