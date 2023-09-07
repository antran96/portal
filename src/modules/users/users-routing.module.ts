import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from './users.module';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];

@NgModule({
  imports: [UsersModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
