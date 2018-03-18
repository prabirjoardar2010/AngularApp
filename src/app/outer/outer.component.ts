import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {
  name:string="";
  result1:string="";
  @Input() result;
  @Input() names;
  @Output() eventFromOuter=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  eventFromInner(passed:string){
    this.name=passed;
    this.result1=passed;
    this.eventFromOuter.emit(this.result1);
  }
}
