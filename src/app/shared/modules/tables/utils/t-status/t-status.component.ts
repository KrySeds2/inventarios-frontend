import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 't-status',
  template: `
  <p-inputSwitch [(ngModel)]="checked" (click)="execute()" [disabled]="true"
  [ngClass]="{
    'diseabledInput': disabled
  }"></p-inputSwitch>
  `,
  styleUrls: ['./t-status.component.scss']
})
export class TStatusComponent implements OnInit {
  @Input()checked!: boolean;
  @Input()disabled: boolean = false;
  @Output() active = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  execute() {
    this.active.emit(this.checked);
  }

}
