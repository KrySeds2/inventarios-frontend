import { AfterViewInit, Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldValidatorsService } from 'src/app/core/services/field-validators.service';

@Component({
  selector: 'app-input-color',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputColorComponent,
      multi: true
    }
  ]
})
export class InputColorComponent implements ControlValueAccessor,AfterViewInit  {
  hexValue: any;
  rgb2: number = 0;
  rgb1: number = 0;
  rgb3: number = 0;
  @Input() label = '';
  @Input() formControlName!: string;
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
    this.hexValue = obj;
    this.setRgb();
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


  setHex() {
    let hex = this.rgbToHex(this.rgb1, this.rgb2, this.rgb3);
    this.hexValue = hex;
    this.value = hex;
  }
  setRgb() {
    let hex = this.hexValue;
    this.value = hex;
    this.rgb1 = this.hexToRgb(hex)?.r;
    this.rgb2 = this.hexToRgb(hex)?.g;
    this.rgb3 = this.hexToRgb(hex)?.b;
  }
  setColor(event: any){
    this._onChange(event.value);
    let hex = event.value;
    this.rgb1 = this.hexToRgb(hex)?.r;
    this.rgb2 = this.hexToRgb(hex)?.g;
    this.rgb3 = this.hexToRgb(hex)?.b;
    this.hexValue = hex;
  }
  componentToHex(c: number) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  rgbToHex(r: number, g: number, b: number): string {
    return "#" + this.componentToHex(parseFloat(r.toString())) + this.componentToHex(parseFloat(g.toString())) + this.componentToHex(parseFloat(b.toString()));
  }
  hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : {
      r: 0,
      g: 0,
      b: 0
    };
  }
}
