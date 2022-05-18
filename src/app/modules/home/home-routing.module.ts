import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeChild1Component } from './components/child1/home-child1.component';
import { HomeChild2Component } from './components/child2/home-child2.component';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'one',
        component: HomeChild1Component
      },
      {
        path: 'two',
        component: HomeChild2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
