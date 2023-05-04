import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-register',
  templateUrl: './button-register.component.html',
  styleUrls: ['./button-register.component.scss']
})
export class ButtonRegisterComponent implements OnInit {
  libraryTranslate = "button."
  constructor() { }

  ngOnInit(): void {
  }

}
