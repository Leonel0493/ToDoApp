import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit, OnDestroy {

  groups:Array<any> = [];
  lstObservables$: Array<Subscription> = []

  constructor() { }

  ngOnInit(): void {
    // const observer1$ = interval(1000).subscribe((resp) => {
    //   console.log('🦁', 'llamando');
    // })

    //this.lstObservables$.push(observer1$);

    this.groups = [
      {
        label: 'News',
        color: 'tomato',
        list: [
          {
            order: 'Como instalar Angular',
            items: [
              {
                key: 'price',
                value: 152
              },
              {
                key: 'time',
                value: 152
              },
              {
                key: 'author',
                value: {
                  name: 'Leonel Rivas',
                  avatar: 'https://avatars.githubusercontent.com/u/5788756?v=4'
                }
              }
            ]
          },
          {
            order: 'Como crear Componentes',
            items: [
              {
                key: 'price',
                value: 75
              },
              {
                key: 'time',
                value: 60
              },
              {
                key: 'author',
                value: {
                  name: 'Leonel Rivas',
                  avatar: 'https://avatars.githubusercontent.com/u/5788756?v=4'
                }
              }
            ]
          }
        ]
      },
      {
        label: 'Worked',
        color: 'yellow',
        list: [
          {
            order: 'Grabacion de videos de clases',
            items: [
              {
                key: 'price',
                value: 10
              },
              {
                key: 'time',
                value: 25
              },
              {
                key: 'author',
                value: {
                  name: 'Leonel Rivas',
                  avatar: 'https://avatars.githubusercontent.com/u/5788756?v=4'
                } 
              }
            ]
          }
        ]
      },
      {
        label: 'Done',
        color: 'green',
        list: [
          {
            order: 'UH112e',
            items: [
              {
                key: 'price',
                value: 10
              },
              {
                key: 'time',
                value: 25
              },
              {
                key: 'author',
                value: {
                  name: 'Leonel Rivas',
                  avatar: 'https://avatars.githubusercontent.com/u/5788756?v=4'
                } 
              }
            ]
          }
        ]
      }
    ]
  }

  ngOnDestroy(): void {
    this.lstObservables$.forEach((s) => s.unsubscribe());
  }
}
