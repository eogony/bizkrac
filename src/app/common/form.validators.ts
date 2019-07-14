import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { map } from 'rxjs/operators';


@Injectable()
export class FormValidators {


static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
      if ((control.value as string).indexOf('') >= 0) {
        return { cannotContainSpace: true};
      }

      return null;
    }

    static shouldBeUnique(dataservice: DataService): AsyncValidatorFn {
      return (c: AbstractControl): Promise<ValidationErrors | null>  |Observable<ValidationErrors | null> => {
        return dataservice.getUserByUname(c.value).pipe(
          map(users => {
            return users && users.length > 0 ? {shouldBeUnique: true} : null;
          })
        );
      };
    }

  }
