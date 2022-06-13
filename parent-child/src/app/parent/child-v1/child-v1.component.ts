import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-v1',
  templateUrl: './child-v1.component.html',
  styleUrls: ['./child-v1.component.css']
})
export class ChildV1Component implements OnInit, OnChanges {
  @Input() counter;
  @Input() backCounter;
  counterVal:any;
  backCounterVal:any;

  constructor() { }

  ngOnInit(): void {
    this.counterVal = this.counter;
    this.backCounterVal = this.backCounter;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes)
    this.counterVal = changes['counter']?.currentValue == null ? this.counterVal : changes['counter']?.currentValue ;
    this.backCounterVal = changes['backCounter']?.currentValue == null ? this.backCounterVal : changes['backCounter']?.currentValue;
  }

}
