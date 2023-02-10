import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BoxComponent } from './components/box/box.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { HeaderComponent } from './components/header/header.component';

const imports = [SharedModule];
const declarations = [HeaderComponent, HeaderBarComponent, BoxComponent];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports, ...declarations],
})
export class LayoutModule {}
