import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
           if (control.value !== '1234') {
            resolve({invalidOldPassword: true});
           }
        });
    }
    static passwordShouldMatch(control: AbstractControl) {
        // tslint:disable-next-line:prefer-let
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
            return { passwordShouldMatch: true};

            return null;
        }
    }
}
