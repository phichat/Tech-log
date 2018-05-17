import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationlalityListComponent } from './nationlality-list.component';

describe('NationlalityListComponent', () => {
  let component: NationlalityListComponent;
  let fixture: ComponentFixture<NationlalityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationlalityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationlalityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
