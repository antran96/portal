import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../modules/dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule)
  },
  {
    path: 'management',
    loadChildren: () => import('../modules/management/management-routing.module').then(m => m.ManagementRoutingModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../modules/users/users-routing.module').then(m => m.UserRoutingModule)
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
