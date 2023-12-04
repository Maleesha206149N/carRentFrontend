import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehiclePopupComponent } from './add-vehicle-popup.component';

describe('AddVehiclePopupComponent', () => {
  let component: AddVehiclePopupComponent;
  let fixture: ComponentFixture<AddVehiclePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVehiclePopupComponent]
    });
    fixture = TestBed.createComponent(AddVehiclePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
