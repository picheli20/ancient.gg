import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const imports = [CommonModule, HttpClientModule, RouterModule];

@NgModule({
  exports: [...imports],
  imports: [...imports],
})
export class SharedModule {}
