import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodManageComponent } from './good-manage.component';

describe('GoodManageComponent', () => {
  let component: GoodManageComponent;
  let fixture: ComponentFixture<GoodManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
