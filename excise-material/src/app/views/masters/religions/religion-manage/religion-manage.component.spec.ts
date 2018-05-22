import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionManageComponent } from './religion-manage.component';

describe('ReligionManageComponent', () => {
  let component: ReligionManageComponent;
  let fixture: ComponentFixture<ReligionManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligionManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligionManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
