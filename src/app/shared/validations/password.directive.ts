import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export function passwordValidator(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
          return null;
      }
      const valid = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(control.value);
      return valid ? null: {password: true};
  };
}
