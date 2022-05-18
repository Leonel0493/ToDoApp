import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { HomeChild1Component } from './components/child1/home-child1.component';
import { HomeChild2Component } from './components/child2/home-child2.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeChild1Component,
    HomeChild2Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
