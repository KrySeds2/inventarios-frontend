import { FormGroup, FormControl } from '@angular/forms';

export function EqualsPassword(pass1Name: string[], pass2Name: string[]) {
  return ( formGroup: FormGroup) => {
      const pass1control = formGroup.get(pass1Name);
      const pass2control = formGroup.get(pass2Name);
      if (pass1control.value === null || pass1control.value === '' || pass1control.value === pass2control.value) {
        pass2control.setErrors(null);
      } else {
        pass2control.setErrors({noEqual: true});
      }
  };
}
export function diferentRecipeNumber(recipe1: string[], recipe2: string[]) {
  return ( formGroup: FormGroup) => {
      const recipe1control = formGroup.get(recipe1);
      const recipe2control = formGroup.get(recipe2);
      if ( recipe1control.value === recipe2control.value) {
        recipe2control.setErrors({noEqual: true});
      } else {
        recipe2control.setErrors(null);
      }
  };
}
