import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'management',
    loadChildren: () => import('../modules/management/management-routing.module').then(m => m.ManagementRoutingModule)
  },
  {
    path: 'user',
    loadChildren: () => import('../modules/user/user-routing.module').then(m => m.UserRoutingModule)
  },
  { 
    path: '**', 
    loadChildren: () => import('../modules/page-error/page-error-routing.module').then(m => m.PageErrorRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
