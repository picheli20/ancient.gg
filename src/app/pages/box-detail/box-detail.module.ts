import { NgModule } from '@angular/core';

import { LayoutModule } from 'src/app/layout/layout.module';
import { BoxDetailComponent } from './components/box-detail.component';
import { BoxDetailRoutingModule } from './box-detail-routing.module';

const imports = [BoxDetailRoutingModule, LayoutModule];
const declarations = [BoxDetailComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports, ...declarations],
})
export class BoxDetailModule {}
