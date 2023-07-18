import { Component, OnInit, ViewChild, Input, EventEmitter } from '@angular/core';
import {Location} from '@angular/common';
import { Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmComponent } from '@shared/modules/dialogs/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.scss']
})
export class FormButtonsComponent implements OnInit {

  libraryTranslate = 'formButtons.';
  @ViewChild('dialogWarning') dialogWarning!: DialogConfirmComponent;
  // @Input() update = false;
  @Output() active: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() previus: EventEmitter<boolean> = new EventEmitter<boolean>();
  updateValue = false;
  @Input() step: 'first' | 'continue'|'last' | 'normal'= 'normal';
  displayWarning = false;
  @Input() label = 'Confirmar';
  @Input() type: 'submit' | 'button' = 'submit';
  @Input('cancel') showCancel:boolean = true;
  @Input() align:string = 'right'
  @Input() backUrl!:string;
  @Input() isDisabled:boolean = false;
  constructor(
    private location: Location,
    protected translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.update) {
      this.label = 'Actualizar';
    }
  }
  back(){
    this.dialogWarning.setDisplay(true);
  }
  cancel(){
    if (this.backUrl) {
      console.log('relative');
      this.router.navigate([this.backUrl], { relativeTo: this.route });

    }else{
      this.location.back();
    }
  }
  clickButtonConfirm(){
    console.log('test');
    this.active.emit(true);
  }
  setId(type: string): string{
    return (type === 'submit')?'submit':'button';
  }
  clickButtonPrevius(){
    this.previus.emit(true);
  }
  @Input()
  set update(value){
      if(value){
      this.label =  'Actualizar';
    }
    this.updateValue = value;
  }



}
