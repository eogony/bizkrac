import { AbstractControl } from '@angular/forms';

// this validator is no longer needed since the control no longer exists.

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
           if (control.value !== '1234') {
            resolve({invalidOldPassword: true});
           }
        });
    }

}
