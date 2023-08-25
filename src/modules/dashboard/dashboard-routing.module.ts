import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { components } from '../layout/components';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardModule } from './dashboard.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [DashboardModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
