import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingProductComponent } from './manufacturing-product.component';

describe('ManufacturingProductComponent', () => {
  let component: ManufacturingProductComponent;
  let fixture: ComponentFixture<ManufacturingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturingProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
