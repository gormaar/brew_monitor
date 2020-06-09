import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { BrewListModule } from "./brew-list/brew-list.module";
import { BrewPageModule } from "./brew-page/brew-page.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrewListModule,
    BrewPageModule,
    AppRoutingModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
