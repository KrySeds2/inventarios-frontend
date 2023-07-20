import { AfterViewInit, ChangeDetectorRef, Component, Injector, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldValidatorsService } from 'src/app/core/services/field-validators.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputImageComponent,
      multi: true
    }
  ]
})
export class InputImageComponent implements ControlValueAccessor, AfterViewInit {
  @Input() label = '';
  @Input() formControlName!: string;
  @Input() type: 'text' | 'number' | 'email' | 'password' = 'text';
  protected disabled = false;
  protected value: ImageModel = new ImageModel();
  private _onChange!: Function;
  protected _onTouched!: Function;
  protected control!: FormControl;
  errors_: string = '';
  source: string | ArrayBuffer | null = environment.defaultImage;
  constructor(private injector: Injector, protected ValidSv: FieldValidatorsService, private cd: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    const ngControl: NgControl | null = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
      this.cd.detectChanges();
    } else {
      // Component is missing form control binding
    }
  }
  writeValue(obj: ImageModel): void {
    this.source = (obj?.src) ? obj?.src : environment.defaultImage;
    if(obj){
      this.value = obj;
    }
    setTimeout(() => {
      this._onChange(null);
    }, 100)
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
  onChange(value: any): void {
    this.value.loadfile = value;
    this.value.src = value;
    if (this._onChange !== undefined) {
      this._onChange(this.value);
    }
  }
  onTouched(): void {
    if (this._onChange !== undefined) {
      this._onTouched();
    }
  }

  async previewImg(event: any) {
    console.log('accedio');

    let files = event.target.files;
    let file = files[0];
    if(!file){
      return;
    }

    let validfiles = [
      "image/png",
      "image/PNG",
      "image/gif",
      "image/GIF",
      "image/jpeg",
      "image/JPEG",
      "image/jpg",
      "image/JPG"
    ];

    let maxsize = 2621440;

    if (!file) {
      this.source = environment.defaultImage;
      return;
    } else {
      if (validfiles.includes(files[0].type)) {
        if (files[0].size < maxsize) {
          this.errors_ = "";
          const FILE = event.target.files[0];
          this.onChange(FILE);
          const reader = new FileReader();
          reader.readAsDataURL(FILE);
          reader.onload = (evt) => {
            this.source = reader.result;
          };
        } else {
          this.errors_ = "El tamaño de la imagen es demasiado grande, maximo: 2mb";
          this.source = environment.defaultImage;
        }
      } else {
        this.errors_ = "La imagen no es valida";
        this.source = environment.defaultImage;
      }
    }
  }
}
export class ImageModel {
  id!: string;
  loadfile?: File;
  src!: string;
}
