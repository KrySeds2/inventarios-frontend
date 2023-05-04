import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateFieldService {

constructor() { }

/**
   * @param form: FormGroup
   * @param error: string .- nombre del error,
   * @param params nombre de campos
   *      example: (formdata,'required',field1)
   *      example2: (formdata,'required',field1,field2child)
   */

/**Tomamos como parametros un objeto to form, un string con el nombre del error y los nombres de
los campos a validad, devuelve un booleano que indica si tiene un error**/
validError(form: FormGroup, error: string, ...params): boolean {
  return form.get(params).hasError(error);
}
/**
Tomamos como parametros un objeto form y los campos del formulario a validar, devuelve un
booleano que indica si el campo invalido y ha sido modificado o tocado por el usuario
**/
valid(form: FormGroup, ...params): boolean {
  return (form.get(params)?.invalid && form.get(params)?.dirty) ||
    (form.get(params)?.invalid && form.get(params)?.touched);
}
/**
Tomamos como parametros un objeto form y los campos del formulario a validar, devuelve un
booleano que indica si el campo invalido y ha sido modificado o tocado por el usuario
**/
validControl(form: FormControl): boolean {
  return (form?.invalid && form?.dirty) ||
    (form?.invalid && form?.touched);
}
/**
Simalar al metodo de validError pero aqui validamos campos requeridos
**/
validRequired(form: FormGroup , ...params): boolean {
  return form.get(params).hasError('required');
}
/**
Simalar al metodo de validError pero aqui validamos campos que no deben ser duplicados
**/
validAlreadyTaken(form: FormGroup, ...params): boolean {
    return form.get(params).hasError('alreadyTaken');
}
/**
 Simalar al metodo de validError pero aqui usamos un formcontrol y el nombre del error a
 verificar
**/
validErrorCT(control: FormControl, error: string): boolean {
  const result = control?.hasError(error);
  return result ? result : false;
}
/**
 Simalar al metodo al metodo valid pero en lugar de tomar un objeto formgroup y los nombre
 de los campos tomamos un objeto formcontrol
**/
validCT(form: FormControl): boolean {
  const result = (form?.invalid && form?.dirty) ||
    (form?.invalid && form?.touched);
  return result ? result : false;
}
/**
 Este método es similar a validRequired, pero en lugar de tomar un objeto FormGroup y
 los nombres de los campos, toma un objeto FormControl
**/
validRequiredCT(form: FormControl): boolean {
  const result = form?.hasError('required');
  return result ? result : false;
}
/**
Este método toma como parámetro un objeto FormGroup y devuelve un booleano que indica si el
formulario es inválido o está deshabilitado. Si el formulario es inválido, marca todos los
campos como "tocados" y devuelve true. Si el formulario está deshabilitado, devuelve true
sin hacer nada más. Si el formulario es válido, lo deshabilita y devuelve false.
**/
invalidSubmit(form: FormGroup): boolean{
  if(form.invalid || form.disabled){
    form.markAllAsTouched();
    return true;
  }
  form.disable({
    onlySelf: true
  });
  return false;
}
/**
Este método toma como parámetro un objeto FormGroup y lo habilita. Este método se utiliza para
reactivar el formulario después de haberlo deshabilitado con invalidSubmit
**/
completeSubmit(form: FormGroup): void{
  form.enable({
    onlySelf: true
  });
}

}
