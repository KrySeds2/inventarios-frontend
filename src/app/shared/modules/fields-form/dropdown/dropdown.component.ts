import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, forwardRef, Injector, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldValidatorsService } from 'src/app/core/services/field-validators.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements OnInit ,AfterViewInit, ControlValueAccessor  {
  @Output('onChange') onChangeEvent: EventEmitter<any> = new EventEmitter();
  @Input() label = '';
  @Input() options: Array<any>= new Array<any>();
  @Input() formControlName!: string;
  disabled = false;
  value: any = '';
  _onChange!: (_:any) => { }
  _onTouched!: Function;
  control!: FormControl;
  @Input() appendTo = null;
  constructor(private injector: Injector, public validService: FieldValidatorsService, private cd: ChangeDetectorRef) { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const ngControl: NgControl | null = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
      this.cd.detectChanges();
    } else {
      // Component is missing form control binding
    }
  }
  writeValue(obj: any): void {
    this.value = obj;
  }
  getNameControl(){
    return this.formControlName;
  }
  registerOnChange(fn: (_:any) => { }): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onChange(event: any): void{
    this._onChange(event.value);
    this.onChangeEvent.emit(event);
  }

}
