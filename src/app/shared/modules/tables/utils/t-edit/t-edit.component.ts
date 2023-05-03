import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 't-edit',
  templateUrl: './t-edit.component.html' ,
  styleUrls: ['./t-edit.component.scss']
})
export class TEditComponent implements OnInit {
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
