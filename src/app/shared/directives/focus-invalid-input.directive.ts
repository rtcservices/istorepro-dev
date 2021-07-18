import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[ibeFocusInvalidInput]'
})
export class FocusInvalidInputDirective {
  constructor(private el: ElementRef) {}

  @HostListener('submit')
  onFormSubmit() {
    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');
    if (invalidControl) {
      if (invalidControl.querySelector('input')) {
        invalidControl.querySelector('input').focus();
      }
      if (invalidControl.querySelector('select')) {
        invalidControl.querySelector('select').focus();
      }
    }
  }
}
