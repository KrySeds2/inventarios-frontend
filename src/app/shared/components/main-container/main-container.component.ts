import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { HeaderDirective } from '../../modules/directives/header.directive';
import { ButtonsDirective } from '../../modules/directives/buttons.directive';
import { BodyDirective } from '../../modules/directives/body.directive';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  @ContentChild(HeaderDirective, { read: TemplateRef }) headerTemplate;
  @ContentChild(ButtonsDirective, { read: TemplateRef }) buttonsTemplate;
  @ContentChild(BodyDirective, { read: TemplateRef }) bodyTemplate;
  constructor() { }

  ngOnInit(): void {
  }

}
