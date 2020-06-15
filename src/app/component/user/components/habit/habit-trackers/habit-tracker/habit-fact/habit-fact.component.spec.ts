import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitFactComponent } from './habit-fact.component';
import {SharedModule} from '../../../../../../shared/shared.module';

describe('HabitFactComponent', () => {
  let component: HabitFactComponent;
  let fixture: ComponentFixture<HabitFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ HabitFactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
