import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  counter:number;
  backCounter:number;

  count:number;
  backCount;

  @ViewChild('cc1') cc1Val: ElementRef;


  constructor() { }

  ngOnInit(): void {
    this.counter = 0;
    this.backCounter = 999
    console.log(this.backCount)
    

  }

  onClick(){
    this.counter = this.counter + 1;
    
  }

  onBackClick(){
    this.backCounter = this.backCounter - 1;
  }

  newItemEvent(event){
    console.log(event)
    this.count = event;
  }

  ngAfterViewInit() {
    this.cc1Val.nativeElement.style.color='red';
    this.cc1Val.nativeElement.innerText = "@View Child working!"
  }

}
