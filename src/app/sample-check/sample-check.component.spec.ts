import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCheckComponent } from './sample-check.component';

describe('SampleCheckComponent', () => {
  let component: SampleCheckComponent;
  let fixture: ComponentFixture<SampleCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
