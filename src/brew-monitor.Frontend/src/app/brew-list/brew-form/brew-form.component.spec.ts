import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewFormComponent } from './brew-form.component';

describe('BrewFormComponent', () => {
  let component: BrewFormComponent;
  let fixture: ComponentFixture<BrewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
