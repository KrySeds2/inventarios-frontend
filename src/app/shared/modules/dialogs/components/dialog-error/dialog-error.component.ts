import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { HeaderDirective } from '../../../directives/header.directive';
import { IconDirective } from '../../../directives/icon.directive';
import { BodyDirective } from '../../../directives/body.directive';
import { ButtonsDirective } from '../../../directives/buttons.directive';

@Component({
  selector: 'app-dialog-error',
  templateUrl: './dialog-error.component.html',
  styleUrls: ['./dialog-error.component.scss']
})
export class DialogErrorComponent implements OnInit {
  @ViewChild('dialogConfirm') dialogConfirm: DialogConfirmComponent;
  @Input() error;
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();
  @Input() custom = false;
  @Input() viewError = true;
  @Input() display = false;
  @Input() header = 'Lo sentimos, ocurrió un error inesperado';
  @Input() subHeader = '';
  @Input() body = 'Por favor intenta nuevamente.';
  @Input() submit = false;
  libraryTranslate = 'dialogs.error.';
  @ContentChild(HeaderDirective, { read: TemplateRef }) headerTemplate;
  @ContentChild(IconDirective, { read: TemplateRef }) iconTemplate;
  @ContentChild(BodyDirective, { read: TemplateRef }) bodyTemplate;
  @ContentChild(ButtonsDirective, { read: TemplateRef }) buttonsTemplate;
  constructor(private translate: TranslateService) {
    this.header;
    this.body ;
   }

  ngOnInit(): void {
  }

  setDisplay(value: boolean, error: any = null): void {
    this.error = (error) ? error : error;
    this.dialogConfirm.setDisplay(value);
  }
  onConfirm(): void {
    this.setDisplay(false);
    setTimeout(() => {
      this.confirm.emit(true);
    }, 1000);
  }
  onHide(): void {
    this.setDisplay(false);
    this.cancel.emit(true);
  }

}
