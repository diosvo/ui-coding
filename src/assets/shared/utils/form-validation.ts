import { AbstractControl, AsyncValidatorFn, FormControl, FormGroupDirective, NgForm, ValidationErrors } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

/***
* @description check validations
*/

class ErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/***
* for @username
*/

function usernameExits(username: string, list?: Array<string>): Observable<boolean> {
  return of(list.includes(username)).pipe(delay(1000));
}

function usernameValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return usernameExits(control.value).pipe(
      map(response => response ? { usernameExits: true } : null)
    );
  };
}

export { ErrorMatcher, usernameExits, usernameValidator };

