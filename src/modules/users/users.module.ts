import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components'


@NgModule({
  declarations: [...components.components],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
