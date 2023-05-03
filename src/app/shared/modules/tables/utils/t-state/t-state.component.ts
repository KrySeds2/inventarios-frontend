import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 't-state',
  template: `<i class="fas fa-check-circle"></i>`,
  styleUrls: ['./t-state.component.scss']
})
export class TStateComponent implements OnInit {
  @Input() active = false;
  constructor() { }

  ngOnInit(): void {
  }

}
