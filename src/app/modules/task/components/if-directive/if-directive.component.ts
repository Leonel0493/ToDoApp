import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-directive',
  templateUrl: './if-directive.component.html',
  styleUrls: ['./if-directive.component.css']
})
export class IfDirectiveComponent implements OnInit {

  showText:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ChangeText():void{
    this.showText = !this.showText;
  }

}
