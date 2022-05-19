import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplate-container',
  templateUrl: './ngtemplate-container.component.html',
  styleUrls: ['./ngtemplate-container.component.css']
})
export class NgtemplateContainerComponent implements OnInit {

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
