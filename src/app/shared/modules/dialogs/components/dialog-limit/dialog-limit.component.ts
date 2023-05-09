import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { HeaderDirective } from '../../../directives/header.directive';
import { IconDirective } from '../../../directives/icon.directive';
import { BodyDirective } from '../../../directives/body.directive';
import { ButtonsDirective } from '../../../directives/buttons.directive';

@Component({
  selector: 'app-dialog-limit',
  templateUrl: './dialog-limit.component.html',
  styleUrls: ['./dialog-limit.component.scss']
})
export class DialogLimitComponent implements OnInit {
  @ViewChild('dialogConfirm') dialogConfirm: DialogConfirmComponent;
  @Input() error;
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();
  @Input() custom = false;
  @Input() display = false;
  @Input() header = 'Limite Alcanzado';
  @Input() subHeader = '';
  @Input() body = 'Se ha alcanzado el limite maximo';
  @Input() submit = false;
  @ContentChild(HeaderDirective, { read: TemplateRef }) headerTemplate;
  @ContentChild(IconDirective, { read: TemplateRef }) iconTemplate;
  @ContentChild(BodyDirective, { read: TemplateRef }) bodyTemplate;
  @ContentChild(ButtonsDirective, { read: TemplateRef }) buttonsTemplate;
  libraryTranslate = 'dialogs.';
  constructor(private translate: TranslateService) {
    this.header ;
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
