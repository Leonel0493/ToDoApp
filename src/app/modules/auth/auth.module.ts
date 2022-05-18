import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './pages/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SahredModule } from '@shared/sahred.module';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SahredModule
  ]
})
export class AuthModule { }
