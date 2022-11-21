import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective {

  @Input() coolInputDefaultBgColor: string = 'white';
  @Input() coolInputFocusBgColor: string = 'orange';

  constructor(private el: ElementRef,
              private rend: Renderer2) {

  }

  ngOnInit() {
    this.changeElementBackgroundColor(this.coolInputDefaultBgColor);
    this.rend.setAttribute(this.el.nativeElement, 'placeholder', this.el.nativeElement.getAttribute('placeholder') + '*')
  }

  @HostListener('focus')
  onFocus() {
    this.isOnFocus = true;
    this.changeElementBackgroundColor(this.coolInputFocusBgColor);
  }

  @HostListener('blur')
  onBlur() {
    this.isOnFocus = false;
    this.changeElementBackgroundColor(this.coolInputDefaultBgColor);
  }

  changeElementBackgroundColor(color: string): void {
    this.backgroundColor = color;
    // this.rend.setStyle(this.el.nativeElement, 'background-color', color);
  }

  private backgroundColor = '';
  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this.backgroundColor;
  }

  private isOnFocus = false;
  @HostBinding('class.isOnFocus')
  get getIsOnFocus() {
    return this.isOnFocus;
  }

}
