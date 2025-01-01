import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {

  constructor(private el : ElementRef) 
  {
      this.setColor('black');
  }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.setColor('red');
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.setColor('black');
  }

  private setColor(color : string)
  {
    this.el.nativeElement.style.color = color;
  }

}
