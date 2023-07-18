import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  protected _display: boolean = false;
  @Input() header = '';
  constructor(private df: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  setDisplay(value: boolean, header: string = ''): void{
    this._display = value;
    this.header = header? header: this.header;
    this.df.detectChanges();
  }
}
