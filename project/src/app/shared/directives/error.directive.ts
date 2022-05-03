import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appError]'
})
export class ErrorDirective {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.color = "red";
  }

}
