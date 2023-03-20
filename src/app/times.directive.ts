import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input ('appTimes') set render(times: number){
    this.viewContainer.clear();
    for(let i = 0; i < times; i++){
      this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: i })
    }
  }
}
