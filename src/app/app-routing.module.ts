import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@modules/auth/pages/login-page.component';
import { Page404Component } from '@modules/not_found/pages/page404.component';
import { TaskPageComponent } from '@modules/task/pages/task-page.component';

const routes: Routes = [
  {
    path:'',
    component: LoginPageComponent
  },
  {
    path:'task-route',
    component: TaskPageComponent
  },
  {
    path: '**',
    component: Page404Component
    //redirectTo: '/task-route' Para redireccionar a otra pagina
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
