import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./brew-page/main/main.component";

const routes: Routes = [
  { path: "brews", component: MainComponent },
  { path: "brews/:id", component: MainComponent },
  { path: "", redirectTo: "brews", pathMatch: "full" },
  { path: "**", component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
