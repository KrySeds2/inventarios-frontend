import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BodyDirective } from '../../directives/body.directive';
import { ButtonsDirective } from '../../directives/buttons.directive';
import { HeaderDirective } from '../../directives/header.directive';
import { IconDirective } from '../../directives/icon.directive';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-dialog-error',
  templateUrl: './dialog-error.component.html',
  styleUrls: ['./dialog-error.component.scss']
})
export class DialogErrorComponent implements OnInit {
  @ViewChild('dialogConfirm') dialogConfirm!: DialogConfirmComponent;
  @Input() error!: any;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() retry: EventEmitter<any> = new EventEmitter<any>();
  @Input() custom = false;
  @Input() viewError = true;
  @Input() display = false;
  @Input() header = 'Lo sentimos, ocurrió un error inesperado';
  @Input() subHeader = '';
  @Input() body = 'Por favor intenta nuevamente.';
  @Input() submit = false;
  @ContentChild(HeaderDirective, { read: TemplateRef }) headerTemplate: any;
  @ContentChild(IconDirective, { read: TemplateRef }) iconTemplate: any;
  @ContentChild(BodyDirective, { read: TemplateRef }) bodyTemplate: any;
  @ContentChild(ButtonsDirective, { read: TemplateRef }) buttonsTemplate: any;
  libraryTranslate = 'dialogs.error.';
  constructor() {
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
    this.retry.emit(true);
  }
  onHide(): void {
    this.setDisplay(false);
    this.close.emit(true);
  }
}
