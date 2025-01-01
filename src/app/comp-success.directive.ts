import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

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
