import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  visibleValue = false;
  @Input() header:string = 'Espere por favor.';
  @Input() body:string = '';
  @Output() visibleChange = new EventEmitter<boolean>();
  constructor(
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  @Input()
  get visible(): boolean {
    return this.visibleValue;
  }
  set visible(value: boolean) {
    this.visibleValue = value;
    this.cd.detectChanges();
    this.visibleChange.emit(this.visibleValue);
  }
  setDisplay(display: boolean){
    this.visible = display;
    this.cd.detectChanges();
  }
}
