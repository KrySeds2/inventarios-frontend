import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-confirm',
  templateUrl: './button-confirm.component.html',
  styleUrls: ['./button-confirm.component.scss']
})
export class ButtonConfirmComponent implements OnInit {
  libraryTranslate = 'buttons.';
  @Output() onConfirm = new EventEmitter();
  @Output() onBack = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  confirm(){
    this.onConfirm.emit();
  }
  back(){
    this.onBack.emit();
  }
}
