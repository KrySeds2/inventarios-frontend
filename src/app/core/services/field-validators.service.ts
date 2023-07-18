import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FieldValidatorsService {

  constructor() {
  }

  /**
   * @param form: FormGroup
   * @param error: string .- nombre del error,
   * @param params nombre de campos
   *      example: (formdata,'required',field1)
   *      example2: (formdata,'required',field1,field2child)
   */
  validError(form: FormGroup, error: string, ...params: any[]): boolean {
    const result = form.get(params)?.hasError(error);
    return result?result: false;
  }
  valid(form: FormGroup, ...params: any[]): boolean {
    const result = (form.get(params)?.invalid && form.get(params)?.dirty) ||
      (form.get(params)?.invalid && form.get(params)?.touched);
      return result?result: false;
  }
  validControl(form: FormControl): boolean {
    const result =  (form?.invalid && form?.dirty) ||
      (form?.invalid && form?.touched);
      return result?result: false;
  }
  validRequired(form: FormGroup , ...params: any[]): boolean {
    const result =  form.get(params)?.hasError('required');
    return result?result: false;
  }

  validAlreadyTaken(form: FormGroup, ...params: any[]): boolean {
    const result =  form.get(params)?.hasError('alreadyTaken');
      return result?result: false;
  }
  
  validErrorCT(control: FormControl, error: string): boolean {
    const result = control?.hasError(error);
    return result ? result : false;
  }
  validCT(form: FormControl): boolean {
    const result = (form?.invalid && form?.dirty) ||
      (form?.invalid && form?.touched);
    return result ? result : false;
  }
  validRequiredCT(form: FormControl): boolean {
    const result = form?.hasError('required');
    return result ? result : false;
  }
  invalidSubmit(form: FormGroup): boolean{
    if(form.disabled){
      return true;
    }
    if(form.invalid){
      form.markAllAsTouched();
      return true;
    }
    form.disable({
      onlySelf: true
    });
    return false;
  }
  completeSubmit(form: FormGroup): void{
    form.enable({
      onlySelf: true
    });
  }
}
