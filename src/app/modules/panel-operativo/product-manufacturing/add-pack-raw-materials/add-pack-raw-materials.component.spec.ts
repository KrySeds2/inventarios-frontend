import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackRawMaterialsComponent } from './add-pack-raw-materials.component';

describe('AddPackRawMaterialsComponent', () => {
  let component: AddPackRawMaterialsComponent;
  let fixture: ComponentFixture<AddPackRawMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPackRawMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPackRawMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
