import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasFormComponent } from './partidas-form.component';

describe('PartidasFormComponent', () => {
  let component: PartidasFormComponent;
  let fixture: ComponentFixture<PartidasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
