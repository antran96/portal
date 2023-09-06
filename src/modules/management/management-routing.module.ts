import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementModule } from './management.module';
import { ManagementComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent
  }
];

@NgModule({
  imports: [ManagementModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
