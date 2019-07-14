import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';


@Injectable()
export class FormValidators {


static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
      if ((control.value as string).indexOf('') >= 0) {
        return { cannotContainSpace: true};
      }

      return null;
    }

  }
