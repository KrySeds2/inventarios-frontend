import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-continue',
  template: `
  <button pButton type="button" [label]="'close'" style="width: 150px;"
  id="continue"></button>`
})
export class ButtonContinueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
