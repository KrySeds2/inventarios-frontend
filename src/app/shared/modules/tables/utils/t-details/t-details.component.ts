import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 't-details',
  templateUrl: './t-details.component.html',
  styleUrls: ['./t-details.component.scss']
})
export class TDetailsComponent implements OnInit {

  @Input() diseable = false;
  @Output() active = new EventEmitter<any>();
  constructor() { }
  ngOnInit(): void{
  }
  execute(): void{
    if ( !this.diseable) {
      this.active.emit(true);
    }
  }
}
