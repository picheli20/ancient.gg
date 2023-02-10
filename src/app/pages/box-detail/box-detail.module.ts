import { NgModule } from '@angular/core';

import { LayoutModule } from 'src/app/layout/layout.module';
import { BoxDetailComponent } from './components/box-detail.component';
import { BoxDetailRoutingModule } from './box-detail-routing.module';
import { BoxOpennedComponent } from './components/box-openned/box-openned.component';

const imports = [BoxDetailRoutingModule, LayoutModule];
const declarations = [BoxDetailComponent, BoxOpennedComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports, ...declarations],
})
export class BoxDetailModule {}
