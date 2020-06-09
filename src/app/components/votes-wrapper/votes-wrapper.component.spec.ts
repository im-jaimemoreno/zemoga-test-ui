import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesWrapperComponent } from './votes-wrapper.component';

describe('VotesWrapperComponent', () => {
  let component: VotesWrapperComponent;
  let fixture: ComponentFixture<VotesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
