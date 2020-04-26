import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BrewListItemComponent } from "./list-item.component";

describe("BrewListItemComponent", () => {
  let component: BrewListItemComponent;
  let fixture: ComponentFixture<BrewListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrewListItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
