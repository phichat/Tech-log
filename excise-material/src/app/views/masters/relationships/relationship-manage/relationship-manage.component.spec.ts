import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipManageComponent } from './relationship-manage.component';

describe('RelationshipManageComponent', () => {
  let component: RelationshipManageComponent;
  let fixture: ComponentFixture<RelationshipManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationshipManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
