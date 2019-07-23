/* import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, AsyncValidator, NG_ASYNC_VALIDATORS, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { map } from 'rxjs/operators';

export class UniqueUsername {*/
  /*  export function uniqueUsernameValidator(dataservice: DataService): AsyncValidatorFn {
    return (c: AbstractControl): Promise<ValidationErrors | null>  |Observable<ValidationErrors | null> => {
      return dataservice.getUserByUname(c.value).pipe(
        map(users => {
          return users && users.length > 0 ? {uniqueUsername: true} : null;
        })
      );
    };
  }
 }


/*@Directive({
  selector: '[appUniqueUsername]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameDirective, multi: true}]
})
export class UniqueUsernameDirective implements AsyncValidator {
   // debouncer: any;
  // static debouncer: any;

  constructor(private dataservice: DataService) { }

  /*static shouldBeUnique(control: AbstractControl): Promise <ValidationErrors | null>  |Observable<ValidationErrors | null> {
      clearTimeout(this.debouncer);
      return new Promise((resolve, reject) => {
          this.debouncer = setTimeout(() => {
            this.dataservice.validateUsername(control.value).subscribe((res) => {
               if (res.ok) {
                resolve(null);
              }
              }, (err) => {resolve({ shouldBeUnique: true});
            });
        }, 1000);
    });
  }

 validate(c: AbstractControl): Promise<ValidationErrors | null>  |Observable<ValidationErrors | null> {
    return this.dataservice.getUserByUname(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? {appUniqueUsername: true} : null;
      })
    );
  }

import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthProvider } from '../providers/auth/auth';

@Injectable()
export class UsernameValidator {

  debouncer: any;

  constructor(public authProvider: AuthProvider) {

  }

  checkUsername(control: FormControl): any {

    clearTimeout(this.debouncer);

    return new Promise(resolve => {

      this.debouncer = setTimeout(() => {

        this.authProvider.validateUsername(control.value).subscribe((res) => {
          if (res.ok) {
            resolve(null);
          }
        }, (err) => {
          resolve({usernameInUse: true});
        });

      }, 1000);

    });
  }

} */
