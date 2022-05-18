import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionValidateGuard } from '@core/guards/session-validate.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('@modules/task/task.module').then((m) => m.TaskModule),
    canActivate: [SessionValidateGuard]
  },
  {
    path: '**',
    loadChildren: () => import('@modules/not_found/not-found.module').then((m) => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
