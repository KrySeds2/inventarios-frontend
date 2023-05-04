import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input() label = '';
  @Input() icon = '';
  @Input() width!: string;
  @Input() height!: string;
  @Input() background!: string;
  @Input() fontcolor!: string;
  @Input() bordercolor!: string;
  @Input() disabled = false;
  @Input() type = 'button';
  constructor() { }

  ngOnInit(): void {
  }

  cancel(){

  }


}
