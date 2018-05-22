import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrestListComponent } from './arrest-list.component';

describe('ArrestListComponent', () => {
  let component: ArrestListComponent;
  let fixture: ComponentFixture<ArrestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
