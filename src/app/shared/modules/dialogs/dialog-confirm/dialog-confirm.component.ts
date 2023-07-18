import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BodyDirective } from '../../directives/body.directive';
import { ButtonsDirective } from '../../directives/buttons.directive';
import { FooterDirective } from '../../directives/footer.directive';
import { HeaderDirective } from '../../directives/header.directive';
import { IconDirective } from '../../directives/icon.directive';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  @ContentChild(HeaderDirective, { read: TemplateRef }) headerTemplate!: any;
  @ContentChild(IconDirective, { read: TemplateRef }) iconTemplate!: any;
  @ContentChild(BodyDirective, { read: TemplateRef }) bodyTemplate!: any;
  @ContentChild(ButtonsDirective, { read: TemplateRef }) buttonsTemplate!: any;
  @ContentChild(FooterDirective, { read: TemplateRef }) footerTemplate!: any;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() closeHide = new EventEmitter<any>();
  @Input() header!: string;
  @Input() closable!: any;
  @Input() dheight = '300px';
  @Input() dwidth = '60vw';
  body: any;
  visible: boolean = false;
  constructor(private df: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  setonHide($event: any) {
    this.closeHide.emit($event);
  }

  setDisplay(display: boolean, body = null ){
    this.body = body;
    this.visible = display;
    this.df.detectChanges();
  }
  getBody() {
    this.visible = false;
    return this.body;
}
}

