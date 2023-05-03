import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 't-image',
  templateUrl: './t-image.component.html',
  styleUrls: ['./t-image.component.scss']
})
export class TImageComponent implements OnInit {
  @Input() src = 'assets/img/TAS360_AUTOTANK.png';
  constructor() { }

  ngOnInit() {
  }

}
