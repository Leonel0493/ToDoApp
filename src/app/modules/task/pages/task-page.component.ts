import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  results:Array<string> = ['Result 1', 'Result 2', 'Result 3', 'Result 4', 'Result 5']
  
  constructor() { }

  ngOnInit(): void {
  }
}
