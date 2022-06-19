import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRectutersComponent } from './dash-rectuters.component';

describe('DashRectutersComponent', () => {
  let component: DashRectutersComponent;
  let fixture: ComponentFixture<DashRectutersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashRectutersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashRectutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
