import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...components.components],
  exports: [...components.components],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
