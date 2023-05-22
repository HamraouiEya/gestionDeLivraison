import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBandComponent } from './selected-band.component';

describe('SelectedBandComponent', () => {
  let component: SelectedBandComponent;
  let fixture: ComponentFixture<SelectedBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedBandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
