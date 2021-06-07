import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatsnackbarComponent } from './matsnackbar.component';

describe('MatsnackbarComponent', () => {
  let component: MatsnackbarComponent;
  let fixture: ComponentFixture<MatsnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatsnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatsnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
