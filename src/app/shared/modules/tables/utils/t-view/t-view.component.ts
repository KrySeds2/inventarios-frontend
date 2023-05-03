import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 't-view',
  template: '<i class="fas fa-eye icon"></i>',
  styleUrls: ['./t-view.component.css']
})
export class TViewComponent implements OnInit {
  @Input() diseable:  boolean = false;
  @Output() click: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emit($event: any){
    if(!this.diseable){
      this.click.emit($event);
    }
  }
}
