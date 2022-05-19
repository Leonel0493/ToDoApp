import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.css']
})
export class NgtemplateComponent implements OnInit {

  results:Array<string> = []

  constructor() { }

  ngOnInit(): void {
  }

}
