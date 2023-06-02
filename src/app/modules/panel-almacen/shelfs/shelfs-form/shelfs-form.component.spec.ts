import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfsFormComponent } from './shelfs-form.component';

describe('ShelfsFormComponent', () => {
  let component: ShelfsFormComponent;
  let fixture: ComponentFixture<ShelfsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelfsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShelfsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
