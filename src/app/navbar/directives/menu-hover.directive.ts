import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NavItem } from '../services';

@Directive({
  selector: '[appMenuHover]'
})
export class MenuHoverDirective {

  constructor(private el: ElementRef) { }

  @Input()
  navItem: NavItem;

  @HostListener('mouseenter') onMouseEnter() {
    this.activeState();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.inactiveState();
  }

  private activeState(): void {
    this.navItem.state = 'active';
  }

  private inactiveState(): void {
    this.navItem.state = 'inactive';
  }

}
