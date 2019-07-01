
import { AbstractControl, ValidationErrors, NumberValueAccessor } from '@angular/forms';
import { promise } from 'protractor';
import { resolve, reject } from 'q';

export class UsernameValidators {

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf('') > 0) {
      return { cannotContainSpace: true};
    }

    return null;
  }

  static shouldBeUnique(control: AbstractControl): Promise <ValidationErrors | null> {
      // tslint:disable-next-line:no-shadowed-variable
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (control.value === 'liz') {
                resolve({shouldBeUnique: true});
              } else {
                resolve(null);
              }
          }, 2000);

      });
  }
}
