import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './pages/task-page.component';
import { HeaderComponent } from './components/header/header.component';
import { IfDirectiveComponent } from './components/if-directive/if-directive.component';
import { SwitchDirectiveComponent } from './components/switch-directive/switch-directive.component';
import { SahredModule } from '@shared/sahred.module';
import { MyselfDirectiveComponent } from './components/myself-directive/myself-directive.component';
import { NgtemplateComponent } from './components/ngtemplate/ngtemplate.component';
import { NgtemplateContainerComponent } from './components/ngtemplate-container/ngtemplate-container.component';
import { ColumnComponent } from './components/column/column.component';


@NgModule({
  declarations: [
    TaskPageComponent,
    HeaderComponent,
    IfDirectiveComponent,
    SwitchDirectiveComponent,
    MyselfDirectiveComponent,
    NgtemplateComponent,
    NgtemplateContainerComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SahredModule
  ]
})
export class TaskModule { }
