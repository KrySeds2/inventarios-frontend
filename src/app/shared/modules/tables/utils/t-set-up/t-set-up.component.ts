import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 't-set-up',
  template: `<a><i class="fas fa-cogs iconCogs"></i></a>`,
  styleUrls: ['./t-set-up.component.scss']
})
export class TSetUpComponent implements OnInit {
  @Input() link = '';
  constructor() { }

  ngOnInit() {
  }

}
