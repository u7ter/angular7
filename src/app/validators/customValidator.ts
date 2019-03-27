import {AbstractControl} from '@angular/forms';

export class CustomValidator {
  // Validates passwords
  static matchPassword(control: AbstractControl) {
    const password = control.get('password').value;

    const confirmPassword = control.get('confirmPassword').value;

    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors( {ConfirmPassword: true} );
    } else {
      return null;
    }
  }
}
