import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverBlankComponent } from './cover-blank.component';

describe('CoverComponent', () => {
  let component: CoverBlankComponent;
  let fixture: ComponentFixture<CoverBlankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverBlankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
