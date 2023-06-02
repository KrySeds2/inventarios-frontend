import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManufacturingFormComponent } from './product-manufacturing-form.component';

describe('ProductManufacturingFormComponent', () => {
  let component: ProductManufacturingFormComponent;
  let fixture: ComponentFixture<ProductManufacturingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductManufacturingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductManufacturingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
