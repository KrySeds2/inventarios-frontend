import { AfterViewInit, Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldValidatorsService } from 'src/app/core/services/field-validators.service';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-input-calendar',
  templateUrl: './input-calendar.component.html',
  styleUrls: ['./input-calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputCalendarComponent,
      multi: true
    }
  ]
})
export class InputCalendarComponent implements ControlValueAccessor, AfterViewInit {
  @Input() label = '';
  @Input() formControlName!: string;
  @Input() showTime: boolean = false;
  @Input() timeOnly: boolean = false;
  @Input() dateFormat!: string;
  @Input() disabled:boolean = false;
  protected value: any = '';
  private _onChange!: Function;
  protected _onTouched!: Function;
  protected control!: FormControl;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  constructor(private injector: Injector, protected ValidSv: FieldValidatorsService) { }

  ngAfterViewInit(): void {
    const ngControl: NgControl | null = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
    } else {
      // Component is missing form control binding
    }
  }
  writeValue(obj: any): void {
    this.value = obj;
  }
  getNameControl() {
    return this.formControlName;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onChange(event: any): void {
    this._onChange(event);
    this.onSelect.emit(event);
  }

}
