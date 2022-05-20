import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  listUser:Array<{id:number, name:string}> = [
    {
      id: 1,
      name: 'Leonel'
    },
    {
      id: 2,
      name: 'Paula'
    },
    {
      id: 3,
      name: 'Hector'
    },
    {
      id: 1,
      name: 'Aura'
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
}
