import { Component, OnInit } from '@angular/core';
/**
 *Footer Component
 *
 * @export
 * @class FooterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'tas-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  libraryTranslate = 'AuthenticationModule.footer.';
  /**
   *
   * get the current year
   */
  actualYear  = new Date().getFullYear();   // año del copyright en el footer

  /**
   * @ignore
   */
  constructor() { }
  /**
   * @ignore
   */
  ngOnInit() {
  }

}
