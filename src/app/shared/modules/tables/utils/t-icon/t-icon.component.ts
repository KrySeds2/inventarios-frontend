import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 't-icon',
  templateUrl: './t-icon.component.html',
  styleUrls: ['./t-icon.component.scss']
})
export class TIconComponent implements OnInit {

  @Input() icon!:string;
  @Input() size:string = '2em';
  @Input() color!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
