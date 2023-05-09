import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLimitComponent } from './dialog-limit.component';

describe('DialogLimitComponent', () => {
  let component: DialogLimitComponent;
  let fixture: ComponentFixture<DialogLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
