import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageErrorModule } from './page-error.module';

const routes: Routes = [];

@NgModule({
  imports: [PageErrorModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageErrorRoutingModule { }
