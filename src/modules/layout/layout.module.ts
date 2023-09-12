import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';
import * as services from './services'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...components.components],
  exports: [...components.components],
  providers: [...services.services],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
