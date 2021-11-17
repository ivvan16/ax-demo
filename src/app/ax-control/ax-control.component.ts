import { Component, Input, AfterContentInit, ContentChild,
  ContentChildren, QueryList, HostBinding } from '@angular/core';
import {ValidationComponent} from '../validation/validation.component';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'ax-control',
  templateUrl: './ax-control.component.html',
  styleUrls: ['./ax-control.component.css']
})
export class AxControlComponent implements AfterContentInit {
  validationMap: {[key: string]: string} = {};
  @Input() title: string;
  @ContentChild(NgModel) form: NgModel;
  @ContentChildren(ValidationComponent) validations: QueryList<ValidationComponent>;
  @HostBinding('style.opacity') opacity: string;

  get isInvalid() {
    return !this.form.valid && (this.form.dirty || this.form.touched);
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.opacity = this.form.disabled ? '0.4' : '1';
    });
    this.validations.forEach(validation => {
      this.validationMap[validation.when] = validation.message;
    });
  }
}
