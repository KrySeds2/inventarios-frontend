import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 't-assign',
  templateUrl: './t-assign.component.html',
  styleUrls: ['./t-assign.component.scss']
})
export class TAssignComponent implements OnInit {

  @Input() diseable = false;
  @Output() active = new EventEmitter<any>();
  constructor() { }
  ngOnInit() {
  }
  execute() {
    if ( !this.diseable) {
      this.active.emit(true);
    }
  }
}
