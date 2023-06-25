import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLotFormComponent } from './product-lot-form.component';

describe('ProductLotFormComponent', () => {
  let component: ProductLotFormComponent;
  let fixture: ComponentFixture<ProductLotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLotFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
