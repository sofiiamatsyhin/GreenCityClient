import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  TranslateModule } from '@ngx-translate/core';


import { HabitTrackerDateComponent } from './habit-tracker-date.component';

describe('HabitTrackerDateComponent', () => {
  let component: HabitTrackerDateComponent;
  let fixture: ComponentFixture<HabitTrackerDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitTrackerDateComponent ],
      imports: [
        TranslateModule.forRoot(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitTrackerDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
