import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appUniqueUsername]'
})
export class UniqueUsernameDirective {
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
  }*/

  validate(c: AbstractControl): Promise<ValidationErrors | null>  |Observable<ValidationErrors | null> {
    return this.dataservice.getUserByUname(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? {appUniqueUsername: true} : null;
      })
    );
  }

}
