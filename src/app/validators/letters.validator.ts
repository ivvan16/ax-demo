import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
import { Directive, OnInit, forwardRef } from '@angular/core';

@Directive({
  selector: '[lettersValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: LettersValidator, multi: true }
  ]
})
export class LettersValidator implements Validator {
  regExpLetters = new RegExp('^[a-zA-Z ]*$');

  validate(c: FormControl) {
    if (!this.regExpLetters.test(c.value)) {
      return { 'lettersValidator': true }
    }

    return null;
  }
}
