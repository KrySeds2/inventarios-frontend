import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialsUsedComponent } from './raw-materials-used.component';

describe('RawMaterialsUsedComponent', () => {
  let component: RawMaterialsUsedComponent;
  let fixture: ComponentFixture<RawMaterialsUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawMaterialsUsedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMaterialsUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
