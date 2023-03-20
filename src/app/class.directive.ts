import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {
    //console.log("Class directive used")
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}
