import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionsFormComponent } from './receptions-form.component';

describe('ReceptionsFormComponent', () => {
  let component: ReceptionsFormComponent;
  let fixture: ComponentFixture<ReceptionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
