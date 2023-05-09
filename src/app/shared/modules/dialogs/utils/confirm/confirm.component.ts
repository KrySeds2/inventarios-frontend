import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-d-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  @Output() confirm: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  selectedConfirm(value) {
    this.confirm.emit(value);
  }
}
