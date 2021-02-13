import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  /* Abaixo estamos instanciando um el que vai ser referencia de um elemento. */
  constructor( private el : ElementRef ) {
    el.nativeElement.style.color  = '#e35e6b';
   }
    
}
