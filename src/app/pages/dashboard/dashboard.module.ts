import { NgModule } from '@angular/core';

import { LayoutModule } from 'src/app/layout/layout.module';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

const imports = [DashboardRoutingModule, LayoutModule];
const declarations = [DashboardComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports, ...declarations],
})
export class DashboardModule {}
