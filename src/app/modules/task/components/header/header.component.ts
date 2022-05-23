import { Component, OnInit } from '@angular/core';
import { TestCourseService } from '@shared/services/test-course.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public readonly menu: Array<{name:string, router:any}> = [
    {
      name: 'Overview',
      router: []
    },
    {
      name: 'Requests',
      router: []
    },
    {
      name: 'Shipments',
      router: []
    },
    {
      name: 'Invoices',
      router: []
    },
    {
      name: 'Employees',
      router: []
    },
    {
      name: 'Settings',
      router: []
    }
  ]

  constructor(public _textCouseService:TestCourseService) { }

  ngOnInit(): void {
  }

}
