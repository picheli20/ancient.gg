import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

const imports = [CommonModule, HttpClientModule];

@NgModule({
  exports: [...imports],
  imports: [...imports],
})
export class SharedModule {}
