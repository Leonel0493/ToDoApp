import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './pages/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SahredModule } from '@shared/sahred.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register.component';
import { MyselfDirectiveComponent } from './components/myself-directive/myself-directive.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterComponent,
    MyselfDirectiveComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SahredModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
