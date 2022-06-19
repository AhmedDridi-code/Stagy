import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashStudentsComponent } from './dash-students.component';

describe('DashStudentsComponent', () => {
  let component: DashStudentsComponent;
  let fixture: ComponentFixture<DashStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
