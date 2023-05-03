import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-order-status',
  templateUrl: './t-order-status.component.html',
  styleUrls: ['./t-order-status.component.scss']
})
export class TOrderStatusComponent implements OnInit {

  libraryTranslate = 'tOrderStatus.';
  @Input() status!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
