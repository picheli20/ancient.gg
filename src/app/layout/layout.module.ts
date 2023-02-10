import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HeaderComponent } from './components/header/header.component';

const imports = [SharedModule];
const declarations = [HeaderComponent, HeaderBarComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports, ...declarations],
})
export class LayoutModule {}
