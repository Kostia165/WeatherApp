import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindWeatherComponent } from './find-weather.component';

describe('FindWeatherComponent', () => {
  let component: FindWeatherComponent;
  let fixture: ComponentFixture<FindWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
