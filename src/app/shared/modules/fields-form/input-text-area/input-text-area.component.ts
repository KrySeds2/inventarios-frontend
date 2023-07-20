import { AfterViewInit, Component, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldValidatorsService } from 'src/app/core/services/field-validators.service';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputTextAreaComponent,
      multi: true
    }
  ]
})
export class InputTextAreaComponent implements ControlValueAccessor,AfterViewInit  {
  @Input() label = '';
  @Input() formControlName!: string;
  @Input() type: 'text' | 'number' | 'email' | 'password' = 'text';
  protected disabled = false;
  protected value: any = '';
  private _onChange!: Function;
  protected _onTouched!: Function;
  protected control!: FormControl;

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
  getNameControl(){
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
  onChange(event: any): void{
    this._onChange(event.target.value);
  }

}
