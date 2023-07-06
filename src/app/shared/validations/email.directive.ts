import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export function emailValidator(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
          return null;
      }
      const valid = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(control.value);
      return valid ? null : {email: { value: control.value }};
  };
}
