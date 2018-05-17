import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityManageComponent } from './nationality-manage.component';

describe('NationalityManageComponent', () => {
  let component: NationalityManageComponent;
  let fixture: ComponentFixture<NationalityManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalityManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalityManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
