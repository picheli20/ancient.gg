import { NgModule } from '@angular/core';

import { LayoutModule } from 'src/app/layout/layout.module';
import { NotFoundComponent } from './components/not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

const imports = [NotFoundRoutingModule, LayoutModule];
const declarations = [NotFoundComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports, ...declarations],
})
export class NotFoundModule {}
