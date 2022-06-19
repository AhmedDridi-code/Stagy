import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContactComponent } from './dash-contact.component';

describe('DashContactComponent', () => {
  let component: DashContactComponent;
  let fixture: ComponentFixture<DashContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
