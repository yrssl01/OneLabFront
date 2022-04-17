import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  value = 16;

  constructor(private object: ElementRef) { 
    this.object.nativeElement.style.fontSize = this.value+"px";
  }
  
  // когда нажимаете 1 увеличить текст
  @HostListener('window:keydown.1', ['$event']) handleKeyDown(event: KeyboardEvent) {
    console.log("You pressed the key");
    this.value += 2; 
    this.object.nativeElement.style.fontSize = this.value+"px";
  } 

  @HostListener('window:keydown.2', ['$event']) handleKeyUp(event: KeyboardEvent) {
    this.value -= 2;
    this.object.nativeElement.style.fontSize = this.value+"px"; 
  }
}
