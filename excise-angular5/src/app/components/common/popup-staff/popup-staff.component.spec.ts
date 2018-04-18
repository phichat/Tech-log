import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupStaffComponent } from './popup-staff.component';

describe('PopupStaffComponent', () => {
  let component: PopupStaffComponent;
  let fixture: ComponentFixture<PopupStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
