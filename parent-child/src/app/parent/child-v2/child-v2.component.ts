import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-v2',
  templateUrl: './child-v2.component.html',
  styleUrls: ['./child-v2.component.css']
})
export class ChildV2Component implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  count:number;
  constructor() { }

  ngOnInit(): void {
    this.count = 0;
  }

  onClick(){
    this.count = this.count + 1;
    this.newItemEvent.emit(this.count.toString());
  }

}
