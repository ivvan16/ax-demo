import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
import { Directive, OnInit, forwardRef } from '@angular/core';

@Directive({
  selector: '[numberValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: NumberValidator, multi: true }
  ]
})
export class NumberValidator implements Validator {
  validate(c: FormControl) {
    let v: number = +c.value;
    if (isNaN(v)) {
      return { 'numberValidator': true }
    }

    return null;
  }
}
