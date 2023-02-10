import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WINDOW_PROVIDERS } from './services/window.service';

const imports = [CommonModule, HttpClientModule, RouterModule];
const provicers = [WINDOW_PROVIDERS];

@NgModule({
  exports: [...imports],
  imports: [...imports],
  providers: [...provicers],
})
export class SharedModule {}
