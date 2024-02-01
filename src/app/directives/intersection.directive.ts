import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  standalone:true,
  selector: '[appIntersectionObserver]'
})
export class IntersectionDirective implements OnInit, OnDestroy{

  @Input() threshold = 0.5; // Default threshold is 0.5
  
  private observer: IntersectionObserver | undefined;
  
  constructor(private el: ElementRef) {}
  
  ngOnInit() {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: this.threshold
    };

    this.observer = new IntersectionObserver((entries) => this.handleIntersection(entries), options);
    this.observer.observe(this.el.nativeElement);
    //console.log(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        
      } /*else {
        entry.target.classList.remove('show');
      }*/
    });
  }
}
