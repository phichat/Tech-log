import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrestManageComponent } from './arrest-manage.component';

describe('ArrestManageComponent', () => {
  let component: ArrestManageComponent;
  let fixture: ComponentFixture<ArrestManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrestManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrestManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
