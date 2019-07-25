import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';
import { map } from 'rxjs/operators';



function isEmptyInputValue(value: any): boolean {
  return value == null || value.length === 0;
}

@Injectable()
export class FormValidators {

  static passwordsDontMatch(control: AbstractControl) {
    const newPassword = control.get('password');
    const retypePassword = control.get('re_password');

    if (newPassword.value !== retypePassword.value) {
        return { passwordsDontMatch: true};
    }
  }

  static nospaceValidator(control: AbstractControl): { [s: string]: boolean } {
    const re = / /;
    if (control.value && control.value.match(re)) {
      return { nospace: true };
    }
    return null;
  }
   /* static shouldBeUnique(dataservice: DataService): AsyncValidatorFn {
      return (c: AbstractControl): Promise<ValidationErrors | null>  |Observable<ValidationErrors | null> => {
        return dataservice.getUserByUname(c.value).pipe(
          map(users => {
            return users && users.length > 0 ? {shouldbeunique: true} : null;
          })
        );
      };
    }*/

    static shouldBeUnique(dataservice: DataService): AsyncValidatorFn {
      return (control: AbstractControl): Promise< { [key: string]: any } | null> | Observable<{ [key: string]: any } | null> => {
        if (isEmptyInputValue(control.value)) {
          return of(null);
        } else {
          return dataservice.validateUsername(control.value).pipe(
            map(users => {
              return users ? { existingUser: { value: control.value }} : null;
            })
          );
        }
     };
    }

  }
