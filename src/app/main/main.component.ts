import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  names=["red","blue","green"];
  result:string="prabir";
  name:string='';
  constructor() { }

  ngOnInit() {
  }
  eventFromOuter(passed:string){
    this.name=passed;
  }

}
