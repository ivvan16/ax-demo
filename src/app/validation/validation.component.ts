import { Component, OnInit, Input, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'validation',
  template: '<ng-content></ng-content>'
})
export class ValidationComponent {
  @Input() when: string;
  message: string;

  constructor(private elementRef: ElementRef) {}

  ngAfterContentInit() {
    this.message = this.elementRef.nativeElement.innerText;
  }
}
